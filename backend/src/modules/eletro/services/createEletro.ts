import { Eletro } from "@prisma/client";

import { prisma } from "../../../prisma/client";
import { AppError } from "../../../error/AppError";
import { EletroType } from "../dtos/CreateEletroDTO";

export async function CreateEletro(body: EletroType) {
  const eletro = await prisma.eletro.create({
    data: body,
  });
  return eletro;
}
