import { FastifyInstance } from "fastify";
import {
  createEletroController,
  deleteEletroById,
  getEletroByIdController,
  getEletroController,
  putEletroController,
} from "../../modules/eletro/controller/EletroController";
import { DeleteAllEletro } from "../../modules/eletro/services/deleteEletro";

async function eletroRoutes(server: FastifyInstance) {
  server.post("/", createEletroController);

  server.get("/eletros/:id", getEletroController);

  server.get("/:id", getEletroByIdController);

  server.put("/:id", putEletroController);

  server.delete("/:id", deleteEletroById);

  server.delete("/", DeleteAllEletro);
}

export default eletroRoutes;
