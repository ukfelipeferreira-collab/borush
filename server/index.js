js;
// server/index.js
import express from "express";
import { Resend } from "resend";

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/vercel-deploy", async (req, res) => {
  try {
    await resend.emails.send({
      from: "atualizacoes@seuprojeto.com",
      to: ["usuario1@exemplo.com", "usuario2@exemplo.com"],
      subject: "🚀 Plataforma atualizada!",
      html: "<p>Olá! A plataforma foi atualizada com sucesso. Confira as novidades!</p>",
    });
    res.status(200).send("Email enviado!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao enviar email");
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
