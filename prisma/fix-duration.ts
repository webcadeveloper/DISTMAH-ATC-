import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.course.updateMany({
        where: { title: 'AutoCAD 3D 2026 - Modelado Tridimensional' },
        data: { duration: 24 }
    });
    console.log(`Cursos actualizados: ${result.count}`);

    const course = await prisma.course.findFirst({
        where: { title: 'AutoCAD 3D 2026 - Modelado Tridimensional' },
        select: { title: true, duration: true }
    });
    console.log(`Verificación: ${course?.title} -> ${course?.duration}h`);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
