import { FastifyInstance } from "fastify";
import {
  createEletroController,
  getEletroByIdController,
  getEletroController,
  putEletroController,
} from "../../modules/eletro/controller/EletroController";

async function eletroRoutes(server: FastifyInstance) {
  server.post("/", createEletroController);

  server.get("/", getEletroController);

  server.get("/:id", getEletroByIdController);

  server.put("/:id", putEletroController);
}

export default eletroRoutes;
