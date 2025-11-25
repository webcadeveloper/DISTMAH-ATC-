import { MicrosoftGraphService } from './graph-services';
import { OutlookEmailService } from './email-service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface LiveClassData {
  courseId: string;
  title: string;
  description: string;
  startDate: Date;
  durationMinutes: number;
  instructorId: string;
  moduleId?: string;
}

export class CalendarService {
  static async createLiveClass(liveClassData: LiveClassData) {
    const instructor = await prisma.user.findUnique({
      where: { id: liveClassData.instructorId },
      select: { email: true, name: true, m365UserId: true },
    });

    if (!instructor?.m365UserId) {
      throw new Error('Instructor no tiene cuenta M365 configurada');
    }

    const enrollments = await prisma.enrollment.findMany({
      where: {
        courseId: liveClassData.courseId,
        status: 'ACTIVE',
      },
      include: {
        user: {
          select: { email: true, name: true },
        },
      },
    });

    const endDate = new Date(liveClassData.startDate);
    endDate.setMinutes(endDate.getMinutes() + liveClassData.durationMinutes);

    const event = await MicrosoftGraphService.createEvent(instructor.m365UserId, {
      subject: liveClassData.title,
      body: liveClassData.description,
      start: liveClassData.startDate,
      end: endDate,
      attendees: enrollments.map(e => e.user.email),
      isOnlineMeeting: true,
    });

    if (!event.id || !event.onlineMeeting?.joinUrl) {
      throw new Error('Error al crear evento con Teams meeting');
    }

    const liveClass = await prisma.liveClass.create({
      data: {
        courseId: liveClassData.courseId,
        moduleId: liveClassData.moduleId,
        title: liveClassData.title,
        description: liveClassData.description,
        scheduledStart: liveClassData.startDate,
        scheduledEnd: endDate,
        meetingUrl: event.onlineMeeting.joinUrl,
        meetingId: event.onlineMeeting.conferenceId,
        joinUrl: event.onlineMeeting.joinUrl,
        m365EventId: event.id,
        instructorId: liveClassData.instructorId,
      },
    });

    for (const enrollment of enrollments) {
      await OutlookEmailService.sendClassInvitation(
        enrollment.user.email,
        liveClassData.title,
        liveClassData.startDate,
        event.onlineMeeting.joinUrl,
        instructor.name
      );
    }

    return { liveClass, event };
  }

  static async getInstructorCalendar(instructorId: string, month: number, year: number) {
    const instructor = await prisma.user.findUnique({
      where: { id: instructorId },
      select: { m365UserId: true },
    });

    if (!instructor?.m365UserId) {
      return [];
    }

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    return await MicrosoftGraphService.getEvents(
      instructor.m365UserId,
      startDate,
      endDate
    );
  }

  static async updateLiveClass(liveClassId: string, updates: {
    title?: string;
    description?: string;
    scheduledStart?: Date;
    durationMinutes?: number;
  }) {
    const liveClass = await prisma.liveClass.findUnique({
      where: { id: liveClassId },
      include: {
        instructor: {
          select: { m365UserId: true, name: true },
        },
      },
    });

    if (!liveClass?.m365EventId || !liveClass.instructor.m365UserId) {
      throw new Error('Clase no tiene evento M365 asociado');
    }

    const eventUpdates: any = {};

    if (updates.title) {
      eventUpdates.subject = updates.title;
    }

    if (updates.description) {
      eventUpdates.body = {
        contentType: 'html',
        content: updates.description,
      };
    }

    if (updates.scheduledStart) {
      const endDate = new Date(updates.scheduledStart);
      const duration = updates.durationMinutes ||
        (liveClass.scheduledEnd.getTime() - liveClass.scheduledStart.getTime()) / 60000;

      endDate.setMinutes(endDate.getMinutes() + duration);

      eventUpdates.start = {
        dateTime: updates.scheduledStart.toISOString(),
        timeZone: 'America/Caracas',
      };

      eventUpdates.end = {
        dateTime: endDate.toISOString(),
        timeZone: 'America/Caracas',
      };
    }

    await MicrosoftGraphService.updateEvent(
      liveClass.instructor.m365UserId,
      liveClass.m365EventId,
      eventUpdates
    );

    const dbUpdates: any = {};
    if (updates.title) dbUpdates.title = updates.title;
    if (updates.description) dbUpdates.description = updates.description;
    if (updates.scheduledStart) {
      dbUpdates.scheduledStart = updates.scheduledStart;
      if (updates.durationMinutes) {
        const endDate = new Date(updates.scheduledStart);
        endDate.setMinutes(endDate.getMinutes() + updates.durationMinutes);
        dbUpdates.scheduledEnd = endDate;
      }
    }

    return await prisma.liveClass.update({
      where: { id: liveClassId },
      data: dbUpdates,
    });
  }

  static async deleteLiveClass(liveClassId: string) {
    const liveClass = await prisma.liveClass.findUnique({
      where: { id: liveClassId },
      include: {
        instructor: {
          select: { m365UserId: true },
        },
      },
    });

    if (!liveClass) {
      throw new Error('Clase no encontrada');
    }

    if (liveClass.m365EventId && liveClass.instructor.m365UserId) {
      await MicrosoftGraphService.deleteEvent(
        liveClass.instructor.m365UserId,
        liveClass.m365EventId
      );
    }

    await prisma.liveClass.delete({
      where: { id: liveClassId },
    });
  }

  static async getLiveClassesByCourse(courseId: string) {
    return await prisma.liveClass.findMany({
      where: { courseId },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        scheduledStart: 'asc',
      },
    });
  }

  static async getUpcomingLiveClasses(instructorId?: string) {
    const now = new Date();

    return await prisma.liveClass.findMany({
      where: {
        scheduledStart: {
          gte: now,
        },
        ...(instructorId && { instructorId }),
      },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        scheduledStart: 'asc',
      },
      take: 10,
    });
  }

  static async recordAttendance(liveClassId: string, actualStart: Date, actualEnd: Date, attendeesCount: number) {
    return await prisma.liveClass.update({
      where: { id: liveClassId },
      data: {
        actualStart,
        actualEnd,
        attendeesCount,
      },
    });
  }

  static async addRecording(liveClassId: string, recordingUrl: string, recordingStreamId?: string) {
    return await prisma.liveClass.update({
      where: { id: liveClassId },
      data: {
        recordingUrl,
        recordingStreamId,
      },
    });
  }
}
