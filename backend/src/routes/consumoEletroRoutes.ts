import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  registerConsumoEletro,
  findConsumoEletro,
  findConsumosEletros,
  upgradeConsumoEletro,
  removeConsumoEletro,
} from "../controller/consumoEletroController";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function consumoEletroRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.get("/:id", findConsumoEletro);
  server.get("/consumos", findConsumosEletros);
  server.put("/:id", upgradeConsumoEletro);
  server.post("/", registerConsumoEletro);
  server.delete("/:id", removeConsumoEletro);
}

export default consumoEletroRoutes;
