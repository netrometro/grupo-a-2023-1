/*
  Warnings:

  - You are about to drop the column `cidade` on the `Endereco` table. All the data in the column will be lost.
  - You are about to drop the column `rua` on the `Endereco` table. All the data in the column will be lost.
  - Added the required column `localidade` to the `Endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Endereco" DROP COLUMN "cidade",
DROP COLUMN "rua",
ADD COLUMN     "localidade" TEXT NOT NULL,
ADD COLUMN     "logradouro" TEXT NOT NULL;
