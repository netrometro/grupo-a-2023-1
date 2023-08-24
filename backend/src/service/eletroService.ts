import { EletroType } from "../dto/CreateEletroDTO";
import prisma from "./../prisma/prisma";

export async function CreateEletro(body: EletroType) {
  const eletro = await prisma.eletro.create({
    data: body,
  });
  return eletro;
}
