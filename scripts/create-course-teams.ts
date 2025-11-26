import { prisma } from '@/lib/prisma';
import { TeamsService } from '@/lib/microsoft/teams-service';
import { SharePointService } from '@/lib/microsoft/sharepoint-service';

async function createCourseTeams() {
  console.log('Creating Teams for all published courses...\n');

  const courses = await prisma.course.findMany({
    where: {
      status: 'PUBLISHED',
      m365TeamId: null,
    },
    include: {
      instructor: {
        select: { m365UserId: true, name: true },
      },
      enrollments: {
        where: { status: 'ACTIVE' },
        include: {
          user: { select: { m365UserId: true, name: true } },
        },
      },
    },
  });

  console.log(`Found ${courses.length} courses without Teams\n`);

  for (const course of courses) {
    try {
      if (!course.instructor.m365UserId) {
        console.log(`✗ Skipped: ${course.title} - Instructor not linked to M365`);
        continue;
      }

      const studentIds = course.enrollments
        .map(e => e.user.m365UserId)
        .filter(Boolean) as string[];

      console.log(`Creating Team for: ${course.title}`);
      console.log(`  Instructor: ${course.instructor.name}`);
      console.log(`  Students: ${studentIds.length}`);

      const team = await TeamsService.createCourseTeam({
        courseName: course.title,
        description: course.description,
        instructorId: course.instructor.m365UserId,
        studentIds,
      });

      await prisma.course.update({
        where: { id: course.id },
        data: { m365TeamId: team.id },
      });

      console.log(`  SharePoint library...`);
      const library = await SharePointService.createCourseLibrary(course.id);

      await prisma.course.update({
        where: { id: course.id },
        data: { m365SharePointId: library.id },
      });

      console.log(`✓ Team created: ${team.id}\n`);

      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`✗ Failed: ${course.title} - ${error instanceof Error ? error.message : String(error)}\n`);
    }
  }

  console.log('All Teams created!');
}

createCourseTeams()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
