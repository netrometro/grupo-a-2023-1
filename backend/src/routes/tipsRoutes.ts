import { FastifyInstance } from "fastify";
import { findTip, findTips, update } from "../controller/tipsController";

async function tipsRoutes(server: FastifyInstance) {
  server.get("/", findTips);
  server.get("/:id", findTip);
  server.put("/:id", update);
}

export default tipsRoutes;
