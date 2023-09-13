import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/userRoutes";
import consumoEletroRoutes from "./routes/consumoEletroRoutes";
import consumoRoutes from "./routes/consumoRoutes";
import eletroRoutes from "./routes/EletroRoutes";
import enderecoRoutes from "./routes/enderecoRoutes";
import tipsRoutes from "./routes/tipsRoutes";
import emailRoutes from "./routes/emailRoutes";
import accessRoutes from "./routes/accessRoutes";

const server = Fastify();

server.get("/healthcheck", async function () {
  return { status: "ok" };
});

async function main() {
  server.register(cors, { origin: true });
  server.register(accessRoutes, { prefix: "api" });
  server.register(userRoutes, { prefix: "api/user" });
  server.register(eletroRoutes, { prefix: "api/eletro" });
  server.register(consumoEletroRoutes, { prefix: "api/consumosEletro" });
  server.register(consumoRoutes, { prefix: "api/consumo" });
  server.register(tipsRoutes, { prefix: "api/dicas" });
  server.register(enderecoRoutes, { prefix: "api/endereco" });
  server.register(emailRoutes, { prefix: "api/email" });

  try {
    await server.listen({
      host: "0.0.0.0",
      port: process.env.PORT ? Number(process.env.PORT) : 3000,
    });
    console.log("Server ready");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
