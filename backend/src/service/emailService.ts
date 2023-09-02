import nodeMailer from "nodemailer";

const html = `
    <h1>Teste de envio de email</h1>
`;

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "selpeappmobile@gmail.com",
    pass: "selpe12345",
  },
});

export async function sendEmail(emailData: any) {
  try {
    await transporter.sendMail(emailData);
    console.log("email enviado com sucesso");
  } catch (error) {
    console.error("erro ao enviar email", error);
  }
}
