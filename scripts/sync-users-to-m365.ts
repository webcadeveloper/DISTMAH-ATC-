import { prisma } from '@/lib/prisma';
import { graphClient } from '@/lib/microsoft/graph-client';

async function syncUsersToM365() {
  console.log('Starting M365 user sync...\n');

  const users = await prisma.user.findMany({
    where: {
      m365UserId: null,
      azureAdId: { not: null },
    },
  });

  console.log(`Found ${users.length} users to sync\n`);

  for (const user of users) {
    try {
      const m365User = await graphClient
        .api(`/users/${user.azureAdId}`)
        .select('id,mail,userPrincipalName')
        .get();

      await prisma.user.update({
        where: { id: user.id },
        data: {
          m365UserId: m365User.id,
          m365Email: m365User.mail || m365User.userPrincipalName,
        },
      });

      console.log(`✓ Synced: ${user.email} → ${m365User.id}`);
    } catch (error) {
      console.error(`✗ Failed: ${user.email} - ${error.message}`);
    }
  }

  console.log('\nSync complete!');
}

syncUsersToM365()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
