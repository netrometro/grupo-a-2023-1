import { FastifyInstance } from "fastify";
import {
  createEletroController,
  getEletroController,
} from "../../modules/eletro/controller/EletroController";

async function eletroRoutes(server: FastifyInstance) {
  server.post("/", createEletroController);

  server.get("/", getEletroController);
}

export default eletroRoutes;
