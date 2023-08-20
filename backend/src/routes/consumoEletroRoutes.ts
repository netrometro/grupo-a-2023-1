import { FastifyInstance } from "fastify";
import {
  registerConsumoEletro,
  findConsumoEletro,
  findConsumosEletros,
  upgradeConsumoEletro,
  removeConsumoEletro,
} from "../controller/consumoEletroController";

async function consumoEletroRoutes(server: FastifyInstance) {
  server.get("/:id", findConsumoEletro);
  server.get("/consumos", findConsumosEletros);
  server.put("/:id", upgradeConsumoEletro);
  server.post("/", registerConsumoEletro);
  server.delete("/:id", removeConsumoEletro);
}

export default consumoEletroRoutes;
