import { Eletro } from "@prisma/client";
import { CreateUserDTO } from "../dtos/CreateEletroDTO";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../../error/AppError";

export class CreateEletro {
  async execute({ nome, kwh }: CreateUserDTO): Promise<Eletro> {
    const eletroAlreadyExist = await prisma.eletro.findUnique({
      where: {
        nome,
      },
    });

    if (eletroAlreadyExist) {
      throw new AppError("Eletro ja existe");
    }

    const eletro = await prisma.eletro.create({
      data: {
        nome,
        kwh,
      },
    });
    return eletro;
  }
}
