import { consumoEletroDTO } from "../dto/consumoEletroDTO";
import prisma from "../prisma/prisma";

// export async function createConsumoEletro(input: consumoEletroDTO) {
//   const consumoEletro = await prisma.consumoEletro.create({
//     data: input,
//   });
// }

export async function listConsumosEletros() {
  const consumosEletros = await prisma.consumoEletro.findMany();
  return consumosEletros;
}

export async function listConsumoEletro(input: Number) {
  const consumoEletro = await prisma.consumoEletro.findUnique({
    where: { id: Number(input) },
  });

  if (!consumoEletro) {
    throw new Error("consumoEletro does not exit");
  }

  return consumoEletro;
}

export async function deleteConsumoEletro(input: Number) {
  const id = input;
  const consumoEletro = await prisma.consumoEletro.findUnique({
    where: { id: Number(id) },
  });

  if (!consumoEletro) {
    throw new Error("user not found");
  }

  const deleteConsumoEletro = await prisma.consumoEletro.delete({
    where: consumoEletro,
  });

  return deleteConsumoEletro;
}
