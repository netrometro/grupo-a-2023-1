import { Eletro } from "@prisma/client";
import { prisma } from "../../../prisma/client";

import { AppError } from "../../../error/AppError";
import { EletroType } from "../../../dto/CreateEletroDTO";

export async function GetAllEletro(userId: number) {
  const response = await prisma.eletro.findMany({
    where: { userId },
  });
  return response;
}

export async function GetEletroById(id: number) {
  const response = await prisma.eletro.findUnique({
    where: {
      id,
    },
  });
  if (response == null) {
    throw new AppError("Esse Eletro nao existe");
  }
  return response;
}
