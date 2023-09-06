import { FastifyInstance } from "fastify";
import {
  findUser,
  findUsers,
  loginUser,
  registerUser,
  removeUser,
  updateAdress,
  upgradeUser,
  userAdress,
} from "../controller/userController";

async function userRoutes(server: FastifyInstance) {
  server.get("/:id", findUser);
  server.get("/users", findUsers);
  server.get("/endereco/:id", userAdress);
  server.put("/:id", upgradeUser);
  server.post("/", registerUser);
  server.post("/login", loginUser);
  server.post("/delete/:id", removeUser);
  server.put("/endereco/:id/:endereco", updateAdress);
}

export default userRoutes;
