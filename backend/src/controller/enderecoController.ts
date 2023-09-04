import { FastifyReply, FastifyRequest } from "fastify";
import {
  createAdress,
  findAdress,
  findByCep,
  findById,
  updateById,
} from "../service/enderecoService";
import { EnderecoDTO } from "../dto/enderecoDTO";

export async function findCep(request: FastifyRequest, reply: FastifyReply) {
  const cep = Object(request.params).cep;
  try {
    const endereco = await findByCep(cep);
    return reply.code(200).send(endereco);
  } catch (error) {
    return reply.send(error);
  }
}

export async function listAdress(request: FastifyRequest, reply: FastifyReply) {
  try {
    const adress = await findAdress();
    return reply.code(200).send(adress);
  } catch (error) {
    return reply.send(error);
  }
}

export async function listAdressById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const adressId = Object(request.params).id;
  try {
    const adress = await findById(adressId);
    return reply.code(200).send(adress);
  } catch (error) {
    return reply.send(error);
  }
}

export async function updateAdress(
  request: FastifyRequest<{ Body: EnderecoDTO }>,
  reply: FastifyReply
) {
  const id = Object(request.params).id;
  const data = request.body;
  try {
    const adress = await updateById(id, data);
    return reply.code(200).send(adress);
  } catch (error) {
    return reply.send(error);
  }
}

export async function newAdress(
  request: FastifyRequest<{ Body: EnderecoDTO }>,
  reply: FastifyReply
) {
  const adress = request.body;
  try {
    const userAdress = await createAdress(adress);
    return reply.code(201).send(userAdress);
  } catch (error) {
    return reply.send(error);
  }
}
