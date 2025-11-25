import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Test123456!', 12);

  // Crear usuario estudiante
  const student = await prisma.user.upsert({
    where: { email: 'estudiante@distmah.com' },
    update: {
      password,
      role: 'STUDENT',
      emailVerified: true,
    },
    create: {
      email: 'estudiante@distmah.com',
      name: 'Estudiante Test',
      password,
      role: 'STUDENT',
      emailVerified: true,
      country: 've',
      phoneNumber: '+58 412-1234567',
    },
  });

  // Crear usuario instructor
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@distmah.com' },
    update: {
      password,
      role: 'INSTRUCTOR',
      emailVerified: true,
    },
    create: {
      email: 'instructor@distmah.com',
      name: 'Instructor Test',
      password,
      role: 'INSTRUCTOR',
      emailVerified: true,
      country: 've',
      phoneNumber: '+58 412-7654321',
      bio: 'Instructor certificado Autodesk con 10 años de experiencia',
      profession: 'Ingeniero Civil',
      yearsExperience: 10,
    },
  });

  // Crear usuario admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@distmah.com' },
    update: {
      password,
      role: 'ADMIN',
      emailVerified: true,
    },
    create: {
      email: 'admin@distmah.com',
      name: 'Admin DISTMAH',
      password,
      role: 'ADMIN',
      emailVerified: true,
      country: 've',
    },
  });

  console.log('✅ Usuarios de prueba creados:');
  console.log('');
  console.log('📚 ESTUDIANTE:');
  console.log('   Email: estudiante@distmah.com');
  console.log('   Password: Test123456!');
  console.log('   Dashboard: /estudiante/dashboard');
  console.log('');
  console.log('👨‍🏫 INSTRUCTOR:');
  console.log('   Email: instructor@distmah.com');
  console.log('   Password: Test123456!');
  console.log('   Dashboard: /instructor/dashboard');
  console.log('');
  console.log('🔐 ADMIN:');
  console.log('   Email: admin@distmah.com');
  console.log('   Password: Test123456!');
  console.log('   Dashboard: /admin/dashboard');
  console.log('');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
