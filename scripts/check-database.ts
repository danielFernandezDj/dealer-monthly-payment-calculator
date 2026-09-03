import "dotenv/config";
import prisma from "../lib/prisma";

async function main() {
  const users = await prisma.user.findMany();

  console.log("Users:", users);
}

main()
  .catch((error) => {
    console.error("Database check failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });