import { FastifyReply, FastifyRequest } from "fastify";
import {
  createConsumoEletro,
  listConsumosEletros,
  listConsumoEletro,
  updateConsumoEletro,
  deleteConsumoEletro,
} from "../service/consumoEletroService";
import { consumoEletroDTO } from "../dto/consumoEletroDTO";

export async function registerConsumoEletro(
  request: FastifyRequest<{ Body: consumoEletroDTO }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const consumoEletro = await createConsumoEletro(body);
    return reply.code(201).send(consumoEletro);
  } catch (e) {
    console.log(e);
    return reply.send(e);
  }
}

export async function findConsumoEletro(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const id = Object(request.params);

  try {
    const consumoEletro = await listConsumoEletro(id.id);
    return reply.code(201).send(consumoEletro);
  } catch (e) {
    return reply.send(e);
  }
}

export async function findConsumosEletros(
  request: FastifyRequest<{ Body: consumoEletroDTO }>,
  reply: FastifyReply
) {
  try {
    const consumosEletros = await listConsumosEletros();
    return reply.code(201).send(consumosEletros);
  } catch (e) {
    return reply.send(e);
  }
}

export async function upgradeConsumoEletro(
  request: FastifyRequest<{ Body: consumoEletroDTO }>,
  reply: FastifyReply
) {
  const id = Object(request.params);
  const body = request.body;

  try {
    const consumoEletro = await updateConsumoEletro(id.id, body);
    return reply.code(201).send(consumoEletro);
  } catch (e) {
    return reply.send(e);
  }
}

export async function removeConsumoEletro(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const id = Object(request.params);

  try {
    const consumoEletro = await deleteConsumoEletro(id.id);
    return reply.code(201).send(consumoEletro);
  } catch (e) {
    console.log(e);
    return reply.send(e);
  }
}
