import { FastifyInstance } from "fastify";
import {
  registerConsumo,
  findConsumo,
  findConsumos,
  upgradeConsumo,
  removeConsumo,
} from "../controller/consumoController";

async function consumoRoutes(server: FastifyInstance) {
  server.post("/", registerConsumo);
  server.get("/consumos", findConsumos);
  server.get("/:id", findConsumo);
  server.put("/:id", upgradeConsumo);
  server.delete("/:id", removeConsumo);
}

export default consumoRoutes;
