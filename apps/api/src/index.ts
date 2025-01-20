import App from './app';
import { PrismaClient } from '@prisma/client';

const main = async () => {
  const prisma = new PrismaClient();

  try {
    // Initialize database connection
    await prisma.$connect();
    console.log('Database connected successfully.');

    const app = new App();
    app.start();
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

main();
