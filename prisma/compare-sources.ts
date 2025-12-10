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

    console.log('\n=== CURSOS EN DB SIN CARPETA EN public/cursos ===');
    let missing = 0;
    courses.forEach(c => {
        if (!existingDirs.includes(c.slug)) {
            console.log(`FALTA: ${c.slug} (${c.title})`);
            missing++;
        }
    });
    if (missing === 0) console.log('Ninguno - todo sincronizado');

    console.log('\n=== CARPETAS EN public/cursos SIN CURSO EN DB ===');
    let extra = 0;
    existingDirs.forEach(dir => {
        if (!courses.find(c => c.slug === dir)) {
            console.log(`EXTRA: ${dir}`);
            extra++;
        }
    });
    if (extra === 0) console.log('Ninguna - todo sincronizado');

    console.log(`\nResumen: ${courses.length} cursos en DB, ${existingDirs.length} carpetas en public/cursos`);
    console.log(`Faltan: ${missing}, Extras: ${extra}`);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
