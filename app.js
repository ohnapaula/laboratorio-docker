import express from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = 5000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

function gerarHTML(mensagem, cor) {
  return `
            <!DOCTYPE html>
            <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Laboratório de Docker</title>
                    <style>
                        body {
                            background-color: #000;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }
                        h1 {
                            text-align: center;
                            color: ${cor};
                        }
                    </style>
                </head>
                <body>
                    <h1>${mensagem}</h1>
                </body>
            </html>`;
}

app.get("/", async (req, res) => {
  try {
    await pool.connect();
    res.send(gerarHTML("Conexão OK!", "yellowgreen"));
  } catch (error) {
    console.error("Falha: ", error);
    res.send(gerarHTML("Erro ao conectar!", "red"));
  }
});

app.get("/info", async (req, res) => {
    try {
        await pool.connect();
        res.send(gerarHTML(`Nome do banco de dados: ${pool.options.database}`, "yellowgreen"));
    } catch (error) {
        console.error("Falha: ", error);
        res.send(gerarHTML("Erro ao buscar nome do banco de dados!", "red"));
    }
});

app.listen(PORT, () =>
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
);
