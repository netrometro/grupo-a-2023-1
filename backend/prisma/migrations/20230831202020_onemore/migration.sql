/*
  Warnings:

  - You are about to drop the column `UF` on the `Endereco` table. All the data in the column will be lost.
  - Added the required column `uf` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Endereco" DROP COLUMN "UF",
ADD COLUMN     "uf" TEXT NOT NULL;
