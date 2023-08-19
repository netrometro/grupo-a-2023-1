import { Eletro } from "@prisma/client";
import { prisma } from "../../../prisma/client";

import { AppError } from "../../../error/AppError";
import { EletroType } from "../dtos/CreateEletroDTO";

export async function GetAllEletro() {
  const response = await prisma.eletro.findMany();
  return response;
}

export async function GetEletroByID(id: number) {
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
