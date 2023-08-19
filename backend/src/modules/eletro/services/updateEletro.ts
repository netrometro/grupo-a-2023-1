import { AppError } from "../../../error/AppError";
import { prisma } from "../../../prisma/client";
import { EletroDTO } from "../dtos/CreateEletroDTO";

export const UpdateEletro = async (
  id: number,
  data: EletroDTO
): Promise<EletroDTO> => {
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
