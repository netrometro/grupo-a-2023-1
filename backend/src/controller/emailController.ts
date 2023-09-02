import { FastifyReply, FastifyRequest } from "fastify";
import { emailDTO } from "../dto/emailDTO";
import { sendEmail } from "../service/emailService";

export async function sendEmailController(
  req: FastifyRequest<{ Body: emailDTO }>,
  res: FastifyReply
) {
  const body = req.body;
  try {
    const email = await sendEmail(body);
    return res.code(201).send(email);
  } catch (e) {
    console.log(e);
    return res.code(500).send(e);
  }
}
