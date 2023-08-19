import { Eletro } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreateEletroDTO } from "../dtos/CreateEletroDTO";
import { AppError } from "../../../error/AppError";

export const GetAllEletro = async (): Promise<Eletro[]> => {
  const response = await prisma.eletro.findMany();
  return response;
};

export const GetEletroById = async (
  id: number
): Promise<CreateEletroDTO | null> => {
  const response = await prisma.eletro.findUnique({
    where: {
      id,
    },
  });
  if (response == null) {
    throw new AppError("Esse Eletro nao existe");
  }
  return response;
};
