import { PrismaClient } from "@prisma/client";
import { tips } from "../data/TipsData";

const prisma = new PrismaClient();

async function main() {
  await prisma.dicas.createMany({
    data: tips,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
