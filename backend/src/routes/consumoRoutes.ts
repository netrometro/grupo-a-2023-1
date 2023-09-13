import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  registerConsumo,
  findConsumo,
  findConsumos,
  upgradeConsumo,
  removeConsumo,
  findHighConsumo,
} from "../controller/consumoController";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function consumoRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.post("/", registerConsumo);
  server.get("/consumos", findConsumos);
  server.get("/consumos/:cash", findHighConsumo);
  server.get("/:id", findConsumo);
  server.put("/:id", upgradeConsumo);
  server.delete("/:id", removeConsumo);
}

export default consumoRoutes;
