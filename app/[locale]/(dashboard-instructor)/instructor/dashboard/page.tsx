import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

async function getInstructorStats() {
  const [courses, totalEnrollments] = await Promise.all([
    prisma.course.findMany({
      include: {
        _count: {
          select: {
            enrollments: true,
            modules: true,
          },
        },
      },
    }),
    prisma.enrollment.count(),
  ]);

  const publishedCourses = courses.filter((c) => c.status === 'PUBLISHED');
  const totalDuration = courses.reduce((sum, c) => sum + (c.duration || 0), 0);

  return {
    totalCourses: courses.length,
    publishedCourses: publishedCourses.length,
    totalStudents: totalEnrollments,
    totalHours: totalDuration,
    recentCourses: courses.slice(0, 3),
  };
}

export default async function InstructorDashboard() {
  const stats = await getInstructorStats();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">
            Hola, Instructor
          </h1>
          <p className="text-neutral-600">
            Bienvenido al panel de control de DISTMAH.
          </p>
        </div>
        <Link href="/instructor/cursos/crear-curso">
          <Button className="bg-primary-600 hover:bg-primary-700">
            + Crear Nuevo Curso
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Estudiantes Activos"
          value={stats.totalStudents.toString()}
          icon={<Users className="w-5 h-5 text-blue-600" />}
        />
        <StatsCard
          title="Cursos Publicados"
          value={stats.publishedCourses.toString()}
          icon={<BookOpen className="w-5 h-5 text-orange-600" />}
        />
        <StatsCard
          title="Horas de Contenido"
          value={`${stats.totalHours}h`}
          icon={<Clock className="w-5 h-5 text-green-600" />}
        />
        <StatsCard
          title="Total Cursos"
          value={stats.totalCourses.toString()}
          icon={<Award className="w-5 h-5 text-purple-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Cursos Recientes</h2>
              <div className="space-y-4">
                {stats.recentCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-md flex items-center justify-center text-white font-bold">
                        {course.title.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">
                          {course.title}
                        </h4>
                        <p className="text-sm text-neutral-500">
                          {course.status === 'PUBLISHED'
                            ? 'Publicado'
                            : 'Borrador'}{' '}
                          · {course._count.modules} módulos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-neutral-900">
                          {course._count.enrollments} Estudiantes
                        </p>
                        <p
                          className={`text-xs ${
                            course.status === 'PUBLISHED'
                              ? 'text-green-600'
                              : 'text-yellow-600'
                          }`}
                        >
                          {course.status === 'PUBLISHED' ? 'Activo' : 'Borrador'}
                        </p>
                      </div>
                      <Link href={`/instructor/cursos/${course.id}/contenido`}>
                        <Button variant="outline" size="sm">
                          Gestionar
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}

                {stats.recentCourses.length === 0 && (
                  <div className="text-center py-8 text-neutral-500">
                    <p>No tienes cursos creados todavía.</p>
                    <Link href="/instructor/cursos/crear-curso">
                      <Button className="mt-4 bg-primary-600 hover:bg-primary-700">
                        Crear Mi Primer Curso
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>
              <div className="space-y-3">
                <Link href="/instructor/cursos/crear-curso">
                  <Button className="w-full justify-start bg-primary-600 hover:bg-primary-700">
                    + Crear Nuevo Curso
                  </Button>
                </Link>
                <Link href="/instructor/cursos">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                  >
                    📚 Ver Mis Cursos
                  </Button>
                </Link>
                <Link href="/instructor/estudiantes">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                  >
                    👥 Gestionar Estudiantes
                  </Button>
                </Link>
                <Link href="/instructor/reportes">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                  >
                    📊 Ver Reportes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <div className="p-2 bg-neutral-50 rounded-full">{icon}</div>
        </div>
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-bold text-neutral-900">{value}</h3>
          {trend && (
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
              {trend}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
