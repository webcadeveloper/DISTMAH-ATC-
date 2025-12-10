import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Acceso denegado. Se requiere rol de instructor.' }, { status: 403 });
    }

    const instructorId = session.user.id;

    const [newEnrollments, forumPosts, pendingSubmissions] = await Promise.all([
      prisma.enrollment.findMany({
        where: {
          course: {
            instructorId
          },
          enrolledAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        },
        include: {
          user: {
            select: {
              name: true
            }
          },
          course: {
            select: {
              id: true,
              title: true
            }
          }
        },
        orderBy: {
          enrolledAt: 'desc'
        },
        take: 10
      }),

      prisma.forumPost.findMany({
        where: {
          category: {
            course: {
              instructorId
            }
          },
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        },
        include: {
          user: {
            select: {
              name: true
            }
          },
          category: {
            include: {
              course: {
                select: {
                  id: true,
                  title: true
                }
              }
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: 10
      }),

      prisma.assignmentSubmission.findMany({
        where: {
          assignment: {
            course: {
              instructorId
            }
          },
          status: 'SUBMITTED'
        },
        include: {
          user: {
            select: {
              name: true
            }
          },
          assignment: {
            include: {
              course: {
                select: {
                  id: true,
                  title: true
                }
              }
            }
          }
        },
        orderBy: {
          submittedAt: 'desc'
        },
        take: 10
      })
    ]);

    const notifications = [
      ...newEnrollments.map(enrollment => ({
        id: `enrollment-${enrollment.id}`,
        type: 'new_student',
        message: `${enrollment.user.name} se inscribió en ${enrollment.course.title}`,
        time: enrollment.enrolledAt,
        read: false,
        link: `/es/instructor/cursos/${enrollment.course.id}/contenido`
      })),
      ...forumPosts.map(post => ({
        id: `forum-${post.id}`,
        type: 'forum',
        message: `${post.user.name} creó una pregunta en ${post.category.course.title}: "${post.title}"`,
        time: post.createdAt,
        read: false,
        link: `/es/instructor/cursos/${post.category.course.id}/contenido`
      })),
      ...pendingSubmissions.map(submission => ({
        id: `submission-${submission.id}`,
        type: 'assignment',
        message: `${submission.user.name} entregó una tarea en ${submission.assignment.course.title}`,
        time: submission.submittedAt,
        read: false,
        link: `/es/instructor/cursos/${submission.assignment.course.id}/assignments`
      }))
    ];

    notifications.sort((a, b) => b.time.getTime() - a.time.getTime());

    const formattedNotifications = notifications.slice(0, 20).map(notif => {
      const now = new Date();
      const diff = now.getTime() - notif.time.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      let timeAgo;
      if (days > 0) {
        timeAgo = `Hace ${days} día${days > 1 ? 's' : ''}`;
      } else if (hours > 0) {
        timeAgo = `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
      } else if (minutes > 0) {
        timeAgo = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
      } else {
        timeAgo = 'Hace unos segundos';
      }

      return {
        ...notif,
        timeAgo
      };
    });

    return NextResponse.json({ notifications: formattedNotifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { error: 'Error al cargar notificaciones' },
      { status: 500 }
    );
  }
}
