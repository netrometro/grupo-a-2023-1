import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  createEletroController,
  deleteEletroById,
  getEletroByIdController,
  getEletroController,
  putEletroController,
} from "../controller/EletroController";
import { DeleteAllEletro } from "../modules/eletro/services/deleteEletro";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function eletroRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.post("/", createEletroController);
  server.get("/eletros/:id", getEletroController);
  server.get("/:id", getEletroByIdController);
  server.put("/:id", putEletroController);
  server.delete("/:id", deleteEletroById);
  server.delete("/", DeleteAllEletro);
}

export default eletroRoutes;
