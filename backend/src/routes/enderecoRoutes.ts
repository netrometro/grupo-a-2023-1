import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  findCep,
  listAdress,
  listAdressById,
  newAdress,
  updateAdress,
} from "../controller/enderecoController";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function enderecoRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.get("/:cep", findCep);
  server.get("/", listAdress);
  server.get("user/:id", listAdressById);
  server.put("/:id", updateAdress);
  server.post("/", newAdress);
}

export default enderecoRoutes;
