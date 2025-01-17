import App from './app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // Initialize the database connection
  try {
    await prisma.$connect();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    return;
  }

  const app = new App();
  app.start();
};

main();
