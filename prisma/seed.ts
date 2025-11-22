import { PrismaClient } from '@prisma/client';
import { COURSES_2026 } from '../lib/courses-catalog-2026';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // 1. Create Demo Users
    const admin = await prisma.user.upsert({
        where: { email: 'admin@distmah.com' },
        update: {},
        create: {
            email: 'admin@distmah.com',
            name: 'Admin Principal',
            role: 'ADMIN',
        },
    });

    const instructor = await prisma.user.upsert({
        where: { email: 'instructor@distmah.com' },
        update: {},
        create: {
            email: 'instructor@distmah.com',
            name: 'Instructor Demo',
            role: 'INSTRUCTOR',
        },
    });

    const student = await prisma.user.upsert({
        where: { email: 'estudiante@distmah.com' },
        update: {},
        create: {
            email: 'estudiante@distmah.com',
            name: 'Estudiante Demo',
            role: 'STUDENT',
        },
    });

    console.log('✅ Users created/verified');

    // 2. Seed Courses from Catalog
    for (const courseData of COURSES_2026) {
        const course = await prisma.course.upsert({
            where: { slug: courseData.slug },
            update: {},
            create: {
                title: courseData.title,
                slug: courseData.slug,
                description: courseData.description,
                // @ts-ignore - Enum mismatch in mock data vs schema
                category: courseData.category,
                // @ts-ignore
                level: courseData.level,
                price: courseData.price,
                version: courseData.version,
                published: true,
                instructorId: instructor.id,
            },
        });

        // 3. Seed Modules and Lessons for the first course (AutoCAD 2D)
        if (courseData.slug === 'autocad-2d-2026') {
            console.log(`Creating modules for ${course.title}...`);

            for (let i = 0; i < courseData.syllabus.length; i++) {
                const moduleData = courseData.syllabus[i];
                const module = await prisma.module.create({
                    data: {
                        title: moduleData.title,
                        order: i,
                        courseId: course.id,
                    },
                });

                for (let j = 0; j < moduleData.lessons.length; j++) {
                    const lessonData = moduleData.lessons[j];
                    await prisma.lesson.create({
                        data: {
                            title: lessonData.title,
                            order: j,
                            duration: lessonData.duration,
                            type: 'VIDEO', // Default to VIDEO
                            moduleId: module.id,
                            content: '<p>Contenido de ejemplo para la lección.</p>',
                        },
                    });
                }
            }
        }
    }

    console.log('✅ Courses and content seeded');

    // 4. Enroll Student in AutoCAD
    const autocad = await prisma.course.findUnique({ where: { slug: 'autocad-2d-2026' } });
    if (autocad) {
        await prisma.enrollment.upsert({
            where: {
                userId_courseId: {
                    userId: student.id,
                    courseId: autocad.id,
                },
            },
            update: {},
            create: {
                userId: student.id,
                courseId: autocad.id,
            },
        });
        console.log('✅ Student enrolled in AutoCAD');
    }

    console.log('🌱 Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
