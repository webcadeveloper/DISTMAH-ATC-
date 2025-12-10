@echo off
set DATABASE_URL=postgresql://neondb_owner:npg_2Pd7lHfULIhO@ep-cold-term-a8sl4r3l-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
npx prisma db push --accept-data-loss
