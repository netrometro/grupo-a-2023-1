import { AppError } from "../../../error/AppError";
import { prisma } from "../../../prisma/client";

export const DeleteEletroById = async (id: number): Promise<void> => {
  const response = await prisma.eletro.delete({
    where: {
      id,
    },
  });
  if (response == null) {
    throw new AppError("Esse Eletro nao existe");
  }
  return;
};

export const DeleteAllEletro = async (): Promise<void> => {
  await prisma.eletro.deleteMany({});
};
