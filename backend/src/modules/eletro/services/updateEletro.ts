import { AppError } from "../../../error/AppError";
import { prisma } from "../../../prisma/client";
import { EletroType } from "../../../dto/CreateEletroDTO";

export async function UpdateEletro(id: number, data: EletroType) {
  const response = await prisma.eletro.update({
    where: {
      id,
    },
    data,
  });
  if (response == null) {
    throw new AppError("Esse Eletro nao existe");
  }
  return response;
}
