import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { findTip, findTips, update } from "../controller/tipsController";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function tipsRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.get("/", findTips);
  server.get("/:id", findTip);
  server.put("/:id", update);
}

export default tipsRoutes;
