import nodeMailer from "nodemailer";
import { emailDTO } from "../dto/emailDTO";

const html = `
    <h1>Teste de envio de email</h1>
`;

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "selpeappmobile@gmail.com",
    pass: "duznguoecnlpcesd",
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
