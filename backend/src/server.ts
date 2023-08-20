import Fastify from "fastify";
import userRoutes from "./routes/userRoutes";
import cors from "@fastify/cors";

const server = Fastify();

server.get("/healthcheck", async function () {
  return { status: "ok" };
});

server.register(cors, { origin: true });

async function main() {
  server.register(userRoutes, { prefix: "api/user" });

  try {
    await server.listen(3000);
    console.log("Server ready at port 3000");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
