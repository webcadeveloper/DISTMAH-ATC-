import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const student = await prisma.user.findFirst({ where: { email: 'estudiante@distmah.com' } });
    if (!student) {
        console.log('Estudiante no encontrado');
        return;
    }

    console.log(`Estudiante: ${student.name} (${student.email})`);

    const allCourses = await prisma.course.findMany();
    console.log(`\nInscribiendo en ${allCourses.length} cursos...\n`);

    for (const course of allCourses) {
        await prisma.enrollment.upsert({
            where: {
                userId_courseId: {
                    userId: student.id,
                    courseId: course.id,
                }
            },
            update: { status: 'ACTIVE' },
            create: {
                userId: student.id,
                courseId: course.id,
                status: 'ACTIVE',
                amount: 0,
                currency: 'USD',
                paymentMethod: 'demo',
                progressPercent: 0,
            },
        });
        console.log(`✅ ${course.title}`);
    }

    const count = await prisma.enrollment.count({
        where: { userId: student.id, status: 'ACTIVE' }
    });
    console.log(`\n📊 Total inscripciones activas: ${count}`);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
