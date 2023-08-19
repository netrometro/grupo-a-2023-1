import { FastifyInstance } from "fastify";
import {
  createEletroController,
  getEletroByIdController,
  getEletroController,
} from "../../modules/eletro/controller/EletroController";

async function eletroRoutes(server: FastifyInstance) {
  server.post("/", createEletroController);

  server.get("/", getEletroController);

  server.get("/:id", getEletroByIdController);
}

export default eletroRoutes;
