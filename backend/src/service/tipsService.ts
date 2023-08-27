import prisma from "../prisma/prisma";
import { tipsDTO } from "../dto/tipsDTO";

export async function listTips() {
  const tips = await prisma.dicas.findMany({
    where: {
      reported: false,
    },
  });
  return tips;
}

export async function listTip(id: number) {
  const tip = await prisma.dicas.findFirst({
    where: {
      id: id,
      reported: false,
    },
  });
  return tip;
}

export async function updateStatus(id: number) {
  const tip = await prisma.dicas.update({
    where: {
      id: id,
    },
    data: {
      reported: true,
    },
  });
}

export async function deleteTip(id: number) {
  const tip = await prisma.dicas.delete({
    where: { id: id },
  });
  return tip;
}

export async function updateTip(id: number, body: tipsDTO) {
  const tip = await prisma.dicas.update({
    where: { id: id },
    data: body,
  });
  return tip;
}
