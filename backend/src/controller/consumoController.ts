import { FastifyReply, FastifyRequest } from "fastify";
import {
  createConsumo,
  listConsumo,
  listConsumos,
  updateConsumo,
  deleteConsumo,
} from "../service/consumoService";
import { consumoDTO } from "../dto/consumoDTO";

export async function registerConsumo(
  request: FastifyRequest<{ Body: consumoDTO }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const consumo = await createConsumo(body);
    return reply.code(201).send(consumo);
  } catch (e) {
    console.log(e);
    return reply.send(e);
  }
}

export async function findConsumo(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const id = Object(request.params);

  try {
    const consumo = await listConsumo(id.id);
    return reply.code(201).send(consumo);
  } catch (e) {
    return reply.send(e);
  }
}

export async function findConsumos(
  request: FastifyRequest<{ Body: consumoDTO }>,
  reply: FastifyReply
) {
  try {
    const consumos = await listConsumos();
    return reply.code(201).send(consumos);
  } catch (e) {
    return reply.send(e);
  }
}

export async function upgradeConsumo(
  request: FastifyRequest<{ Body: consumoDTO }>,
  reply: FastifyReply
) {
  const id = Object(request.params);
  const body = request.body;

  try {
    const consumo = await updateConsumo(id.id, body);
    return reply.code(201).send(consumo);
  } catch (e) {
    return reply.send(e);
  }
}

export async function removeConsumo(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const id = Object(request.params);

  try {
    const consumo = await deleteConsumo(id.id);
    return reply.code(201).send(consumo);
  } catch (e) {
    console.log(e);
    return reply.send(e);
  }
}
