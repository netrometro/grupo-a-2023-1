import { AppError } from "../../../error/AppError";
import { prisma } from "../../../prisma/client";

export const DeleteEletroById = async (id: number): Promise<void> => {
  const response = await prisma.eletro.delete({
    where: {
      id,
    },
  });
  if (response == null) {
    throw new AppError("Eletro ja existe");
  }
};

export const DeleteAllEletro = async (): Promise<void> => {
  const response = await prisma.eletro.deleteMany({});
};
