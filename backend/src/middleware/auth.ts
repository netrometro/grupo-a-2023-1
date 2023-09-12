import { FastifyReply, FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import prisma from "../prisma/prisma";

type JWTPayload = {
  id: number;
};

export async function AuthMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return reply.status(400).send({ error: "Token not provided" });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = verify(token, process.env.JWT_SECRET ?? "");
    const { id } = decoded as JWTPayload;

    const user = await prisma.user.findFirst({
      where: { id: id },
    });
    if (!user) {
      throw new Error("user not found");
    }
  } catch (error) {
    return reply.status(401).send(error);
  }
}
