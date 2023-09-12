import { FastifyInstance } from "fastify";
import { loginUser, registerUser } from "../controller/userController";

async function accessRoutes(server: FastifyInstance) {
  server.post("/login", loginUser);
  server.post("/register", registerUser);
}

export default accessRoutes;
