import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { sendEmailController } from "../controller/emailController";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function emailRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.post("/", sendEmailController);
}

export default emailRoutes;
