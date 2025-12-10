const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, lastLoginAt: true }
  });
  console.log('Usuarios en la base de datos:');
  if (users.length === 0) {
    console.log('  No hay usuarios');
  } else {
    users.forEach(u => {
      console.log(`  Email: ${u.email}`);
      console.log(`  Rol: ${u.role}`);
      console.log(`  Ultimo login: ${u.lastLoginAt || 'Nunca'}`);
      console.log('  ---');
    });
  }
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
