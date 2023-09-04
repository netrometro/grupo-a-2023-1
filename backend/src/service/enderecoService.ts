import axios from "axios";
import prisma from "../prisma/prisma";
import { EnderecoDTO } from "../dto/enderecoDTO";

export function endereco(cep: String) {
  return `https://viacep.com.br/ws/${cep}/json/`;
}

export async function findByCep(cep: String) {
  let obj: Object = {};
  await axios
    .get(endereco(cep))
    .then((reply) => {
      let endereco = reply.data;
      obj = {
        cep: endereco.cep,
        numero: endereco.numero,
        uf: endereco.uf,
        bairro: endereco.bairro,
        logradouro: endereco.logradouro,
        localidade: endereco.localidade,
      };
      console.log(JSON.stringify(endereco));
    })
    .catch((error) => console.log(error));
  return obj;
}

export async function createAdress(endereco: EnderecoDTO) {
  const adress = await prisma.endereco.findFirst({
    where: {
      cep: endereco.cep,
      numero: endereco.numero,
      uf: endereco.uf,
      bairro: endereco.bairro,
      logradouro: endereco.logradouro,
      localidade: endereco.localidade,
    },
  });
  if (adress) {
    console.log("adress already registered");
    return adress;
  }
  const userAdress = await prisma.endereco.create({
    data: endereco,
  });
  return userAdress;
}

export async function findAdress() {
  const adress = await prisma.endereco.findMany();
  return adress;
}

export async function findById(id: number) {
  const adress = await prisma.endereco.findFirst({
    where: { id: Number(id) },
  });
  if (!adress) {
    throw new Error("adress not found");
  }
  return adress;
}
export async function updateById(id: number, data: EnderecoDTO) {
  const adress = await prisma.endereco.findFirst({
    where: { id: Number(id) },
  });
  if (!adress) {
    throw new Error("adress not found");
  }
  const { cep, numero, uf, logradouro, localidade, bairro } = data;
  const newAdress = await prisma.endereco.update({
    where: { id: Number(id) },
    data: {
      cep: cep,
      numero: numero,
      uf: uf,
      logradouro: logradouro,
      localidade: localidade,
      bairro: bairro,
    },
  });
  return newAdress;
}
