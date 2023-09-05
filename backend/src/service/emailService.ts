import nodeMailer from "nodemailer";
import { emailDTO } from "../dto/emailDTO";
import "dotenv/config";

const html = `
    <h1>Teste de envio de email</h1>
`;

const transporter = nodeMailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "25"),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(emailData: emailDTO) {
  try {
    await transporter.sendMail(emailData);
    console.log("email enviado com sucesso");
  } catch (error) {
    console.error("erro ao enviar email", error);
  }
}
