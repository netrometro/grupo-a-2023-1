/*
  Warnings:

  - You are about to drop the column `endereco` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "endereco",
ADD COLUMN     "enderecoId" INTEGER;

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_cep_key" ON "Endereco"("cep");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;
