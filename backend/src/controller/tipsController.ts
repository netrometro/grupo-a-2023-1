import { FastifyRequest, FastifyReply } from "fastify";
import { listTips, listTip, updateStatus } from "../service/tipsService";

export async function findTips(request: FastifyRequest, reply: FastifyReply) {
  try {
    const tips = await listTips();

    return reply.code(200).send(tips);
  } catch (error) {
    return reply.send(error);
  }
}

export async function findTip(request: FastifyRequest, reply: FastifyReply) {
  try {
    const id = Object(request.params).id;
    const tip = await listTip(Number(id));
    return reply.code(200).send(tip);
  } catch (error) {
    return reply.send(error);
  }
}

export async function update(request: FastifyRequest, reply: FastifyReply) {
  try {
    const id = Object(request.params).id;
    const tip = await updateStatus(Number(id));
    return reply.code(204).send(tip);
  } catch (error) {
    return reply.send(error);
  }
}
