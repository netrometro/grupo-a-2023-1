import { FastifyReply, FastifyRequest } from "fastify";
import { CreateEletro } from "../services/createEletro";
import { EletroType } from "../dtos/CreateEletroDTO";
import { GetAllEletro } from "../services/getEletro";

export async function createEletroController(
  req: FastifyRequest<{ Body: EletroType }>,
  res: FastifyReply
) {
  const body = req.body;

  try {
    const eletro = await CreateEletro(body);
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}

export async function getEletroController(
  req: FastifyRequest,
  res: FastifyReply
) {
  try {
    const eletro = await GetAllEletro();
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}
