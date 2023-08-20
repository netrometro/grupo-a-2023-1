import { consumoEletroDTO } from "../dto/consumoEletroDTO";
import prisma from "../prisma/prisma";

export async function createConsumoEletro(input: consumoEletroDTO) {
  const consumoEletro = await prisma.consumoEletro.create({
    data: input,
  });
}

export async function listConsumosEletros() {
  const consumosEletros = await prisma.consumoEletro.findMany();
  return consumosEletros;
}

export async function listConsumoEletro(input: Number) {
  const consumoEletro = await prisma.consumoEletro.findUnique({
    where: { id: Number(input) },
  });

  if (!consumoEletro) {
    throw new Error("consumoEletro not found");
  }

  return consumoEletro;
}

export async function updateConsumoEletro(id: Number, body: consumoEletroDTO) {
  const consumoEletro = await prisma.consumoEletro.findUnique({
    where: { id: Number(id) },
  });

  if (!consumoEletro) {
    throw new Error("consumoEletro not found");
  }

  const { consumoId, eletroId, dinheiro, kwh } = body;

  const update = await prisma.consumoEletro.update({
    where: {
      id: Number(id),
    },
    data: {
      consumoId: consumoId,
      eletroId: eletroId,
      dinheiro: dinheiro,
      kwh: kwh,
    },
  });

  return consumoEletro;
}

export async function deleteConsumoEletro(input: Number) {
  const id = input;
  const consumoEletro = await prisma.consumoEletro.findUnique({
    where: { id: Number(id) },
  });

  if (!consumoEletro) {
    throw new Error("consumoEletro not found");
  }

  const deleteConsumoEletro = await prisma.consumoEletro.delete({
    where: consumoEletro,
  });

  return deleteConsumoEletro;
}
