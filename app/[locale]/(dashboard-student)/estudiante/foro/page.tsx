import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ForumCategoryCard } from '@/components/forum/ForumCategoryCard';

export default async function ForoEstudiantePage() {
  const session = await auth();
  if (!session) redirect('/login');

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
    include: {
      enrollments: {
        include: {
          course: {
            include: {
              forumCategories: {
                include: {
                  _count: {
                    select: { posts: true }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  const allCategories = user?.enrollments.flatMap(
    (enrollment) => enrollment.course.forumCategories
  ) || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Foros de Mis Cursos</h1>

      {allCategories.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No hay categorías de foro disponibles en tus cursos.
        </div>
      ) : (
        <div className="space-y-4">
          {allCategories.map((category) => (
            <ForumCategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
