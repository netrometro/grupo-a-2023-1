/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_enderecoId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "enderecoId",
ADD COLUMN     "endereco" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_endereco_fkey" FOREIGN KEY ("endereco") REFERENCES "Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;
