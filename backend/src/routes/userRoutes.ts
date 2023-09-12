import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  findUser,
  findUsers,
  removeUser,
  updateAdress,
  upgradeUser,
  userAdress,
} from "../controller/userController";
import { AuthMiddleware } from "../middleware/auth";

const middleware = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  AuthMiddleware(request, reply);
  next();
};

async function userRoutes(server: FastifyInstance) {
  server.addHook("preHandler", middleware);
  server.get("/:id", findUser);
  server.get("/users", findUsers);
  server.get("/endereco/:id", userAdress);
  server.put("/:id", upgradeUser);
  server.post("/delete/:id", removeUser);
  server.put("/endereco/:id/:endereco", updateAdress);
}

export default userRoutes;
