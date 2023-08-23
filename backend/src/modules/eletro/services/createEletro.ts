import { prisma } from "../../../prisma/client";
import { EletroType } from "../dtos/CreateEletroDTO";

export async function CreateEletro(body: EletroType) {
  const eletro = await prisma.eletro.create({
    data: body,
  });
  return eletro;
}
