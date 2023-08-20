import { consumoDTO } from "../dto/consumoDTO";
import prisma from "../prisma/prisma";

export async function createConsumo(input: consumoDTO) {
  const consumo = await prisma.consumo.create({
    data: input,
  });
  return consumo;
}

export async function listConsumos() {
  const consumos = await prisma.consumo.findMany();
  return consumos;
}

export async function listConsumo(input: Number) {
  const consumo = await prisma.consumo.findUnique({
    where: { id: Number(input) },
  });

  if (!consumo) {
    throw new Error("consumo does not exit");
  }

  return consumo;
}

export async function updateConsumo(id: Number, body: consumoDTO) {
  const consumo = await prisma.consumo.findUnique({
    where: { id: Number(id) },
  });

  if (!consumo) {
    throw new Error("consumo not found");
  }

  const { userId, date, dinheiro, kwh /* consumos */ } = body;

  const update = await prisma.consumo.update({
    where: {
      id: Number(id),
    },
    data: {
      date: date,
      dinheiro: dinheiro,
      kwh: kwh,
      userId: userId,
      //   consumos: consumos,
    },
  });

  return consumo;
}

export async function deleteConsumo(input: Number) {
  const id = input;
  const consumo = await prisma.consumo.findUnique({
    where: { id: Number(id) },
  });

  if (!consumo) {
    throw new Error("user not found");
  }

  const deleteConsumo = await prisma.consumo.delete({
    where: consumo,
  });

  return deleteConsumo;
}
