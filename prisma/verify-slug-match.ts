import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
    const courses = await prisma.course.findMany({ select: { title: true, slug: true } });
    const cursosDir = path.join(process.cwd(), 'public', 'cursos');
    const existingDirs = fs.readdirSync(cursosDir).filter(f =>
        fs.statSync(path.join(cursosDir, f)).isDirectory()
    );

    console.log('=== VERIFICACIÓN DE SLUGS ===\n');
    console.log('DB Slug -> Carpeta Existe?\n');

    let issues = 0;
    for (const course of courses) {
        const exists = existingDirs.includes(course.slug);
        const status = exists ? '✅' : '❌';
        if (!exists) issues++;
        console.log(`${status} ${course.slug} -> ${exists ? 'OK' : 'NO EXISTE'} (${course.title})`);
    }

    console.log(`\n=== RESUMEN ===`);
    console.log(`Total cursos DB: ${courses.length}`);
    console.log(`Carpetas existentes: ${existingDirs.length}`);
    console.log(`Problemas: ${issues}`);

    if (issues > 0) {
        console.log('\n=== CARPETAS DISPONIBLES ===');
        existingDirs.forEach(d => console.log(`  - ${d}`));
    }
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
