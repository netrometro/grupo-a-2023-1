import { FastifyReply, FastifyRequest } from "fastify";
import { CreateEletro } from "../services/createEletro";
import { EletroType } from "../dtos/CreateEletroDTO";
import { GetAllEletro, GetEletroById } from "../services/getEletro";
import { UpdateEletro } from "../services/updateEletro";
import { DeleteAllEletro, DeleteEletroById } from "../services/deleteEletro";

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
  const id = Object(req.params);
  try {
    const eletro = await GetAllEletro(parseInt(id.id));
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}

export async function getEletroByIdController(
  req: FastifyRequest,
  res: FastifyReply
) {
  const id = Object(req.params);

  try {
    const eletro = await GetEletroById(parseInt(id.id));
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}

export async function putEletroController(
  req: FastifyRequest<{ Body: EletroType }>,
  res: FastifyReply
) {
  const body = req.body;
  const id = Object(req.params);
  try {
    const eletro = await UpdateEletro(parseInt(id.id), body);
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}

export async function deleteEletroById(req: FastifyRequest, res: FastifyReply) {
  const id = Object(req.params);
  try {
    const eletro = await DeleteEletroById(parseInt(id.id));
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}

export async function deleleAllEletro(req: FastifyRequest, res: FastifyReply) {
  try {
    const eletro = await DeleteAllEletro();
    return res.code(201).send(eletro);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}
