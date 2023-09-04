import { FastifyInstance } from "fastify";
import {
  findCep,
  listAdress,
  listAdressById,
  newAdress,
  updateAdress,
} from "../controller/enderecoController";

async function enderecoRoutes(server: FastifyInstance) {
  server.get("/:cep", findCep);
  server.get("/", listAdress);
  server.get("user/:id", listAdressById);
  server.put("/:id", updateAdress);
  server.post("/", newAdress);
}

export default enderecoRoutes;
