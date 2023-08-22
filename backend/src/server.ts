import Fastify from "fastify";
import userRoutes from "./routes/userRoutes";
import consumoEletroRoutes from "./routes/consumoEletroRoutes";
import consumoRoutes from "./routes/consumoRoutes";
import eletroRoutes from "./routes/EletroRoutes/EletroRouts";
import eletroRoutes from "./routes/EletroRoutes/EletroRouts";
import cors from "@fastify/cors";

const server = Fastify();

server.get("/healthcheck", async function () {
  return { status: "ok" };
});

async function main() {
  server.register(cors, { origin: true });
  server.register(userRoutes, { prefix: "api/user" });
  server.register(eletroRoutes, { prefix: "api/eletro" });
  server.register(consumoEletroRoutes, { prefix: "api/consumosEletro" });
  server.register(consumoRoutes, { prefix: "api/consumo" });

  try {
    await server.listen(3000);
    console.log("Server ready at port 3000");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
>>>>>>>>> Temporary merge branch 2
