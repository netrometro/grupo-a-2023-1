import { Eletro } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreateEletroDTO } from "../dtos/CreateEletroDTO";

export const GetEletro = async () => {
  const response = await prisma.eletro.findMany();
  return response;
};

export const GetEletroById = async (id: number) => {
  const reponse = await prisma.eletro.findUnique({
    where: {
      id,
    },
  });
  return reponse;
};
