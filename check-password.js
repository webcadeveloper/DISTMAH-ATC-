const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: 'instructor@distmah.com' },
    select: { email: true, password: true, role: true }
  });

  if (!user) {
    console.log('Usuario no encontrado');
    return;
  }

  console.log('Usuario encontrado:', user.email);
  console.log('Rol:', user.role);
  console.log('Tiene password hash:', !!user.password);

  if (user.password) {
    const testPassword = 'Test123456!';
    const match = await bcrypt.compare(testPassword, user.password);
    console.log(`Password "${testPassword}" ${match ? 'CORRECTO' : 'INCORRECTO'}`);
  }
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
