import { AppError } from "../../../error/AppError";
import { prisma } from "../../../prisma/client";
import { EletroType } from "../dtos/CreateEletroDTO";

export const UpdateEletro = async (
  id: number,
  data: EletroType
): Promise<EletroType> => {
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
};
