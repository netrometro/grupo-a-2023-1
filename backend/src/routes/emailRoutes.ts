import { FastifyInstance } from "fastify";
import { sendEmailController } from "../controller/emailController";

async function emailRoutes(server: FastifyInstance) {
  server.post("/", sendEmailController);
}

export default emailRoutes;
