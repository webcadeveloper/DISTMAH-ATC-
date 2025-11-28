import { PrismaClient } from '@prisma/client';
import { COURSES_2026 } from '../lib/courses-catalog-2026';

const prisma = new PrismaClient();

// Mapping functions
function mapCategory(category: string): string {
    const mapping: Record<string, string> = {
        'AutoCAD': 'AUTOCAD',
        'Revit': 'REVIT',
        'Civil3D': 'CIVIL3D',
        'Navisworks': 'NAVISWORKS',
        'BIM360': 'BIM360',
    };
    return mapping[category] || 'AUTOCAD';
}

function mapLevel(level: string): string {
    const mapping: Record<string, string> = {
        'Básico': 'BASICO',
        'Intermedio': 'INTERMEDIO',
        'Avanzado': 'AVANZADO',
    };
    return mapping[level] || 'BASICO';
}

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
    console.log(`Seeding ${COURSES_2026.length} courses...`);
    for (const courseData of COURSES_2026) {
        const course = await prisma.course.upsert({
            where: { slug: courseData.slug },
            update: {},
            create: {
                title: courseData.title,
                slug: courseData.slug,
                description: courseData.description,
                category: mapCategory(courseData.category) as any,
                level: mapLevel(courseData.level) as any,
                price: courseData.price,
                version: courseData.version,
                software: courseData.software || `AutoCAD ${courseData.version}`,
                duration: courseData.duration || 40,
                sessions: courseData.sessions || 10,
                status: 'PUBLISHED',
                instructorId: instructor.id,
            },
        });
        console.log(`  ✅ ${course.title}`);

        // 3. Seed Modules and Lessons for the first course (AutoCAD 2D)
        if (courseData.slug === 'autocad-2d-2026') {
            console.log(`Creating modules for ${course.title}...`);

            for (let i = 0; i < courseData.syllabus.length; i++) {
                const moduleData = courseData.syllabus[i];
                const courseModule = await prisma.module.create({
                    data: {
                        title: moduleData.title,
                        number: i + 1,
                        order: i,
                        duration: moduleData.duration || 2,
                        description: moduleData.description || '',
                        courseId: course.id,
                    },
                });

                for (let j = 0; j < moduleData.lessons.length; j++) {
                    const lessonData = moduleData.lessons[j];
                    await prisma.lesson.create({
                        data: {
                            title: lessonData.title,
                            number: j + 1,
                            order: j,
                            duration: lessonData.duration,
                            type: 'VIDEO',
                            moduleId: courseModule.id,
                            richText: '<p>Contenido de ejemplo para la lección.</p>',
                            description: lessonData.description || '',
                            published: true,
                        },
                    });
                }
                console.log(`    ✅ Module ${i + 1}: ${moduleData.title} (${moduleData.lessons.length} lessons)`);
            }
        }
    }


    // 4. Enroll student in ALL courses
    console.log('Enrolling student in all courses...');
    const allCourses = await prisma.course.findMany();

    for (const course of allCourses) {
        await prisma.enrollment.upsert({
            where: {
                userId_courseId: {
                    userId: student.id,
                    courseId: course.id,
                }
            },
            update: {
                status: 'ACTIVE',
            },
            create: {
                userId: student.id,
                courseId: course.id,
                status: 'ACTIVE',
                amount: 0,
                currency: 'USD',
                paymentMethod: 'demo',
                progressPercent: Math.floor(Math.random() * 30),
            },
        });
        console.log(`  ✅ Enrolled in: ${course.title}`);
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
