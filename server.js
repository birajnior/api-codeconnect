const express = require("express");
const cors = require("cors");
const posts = require("./posts.json"); // Importando os dados do JSON

const app = express();

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());
app.use(express.json());

// Rota para obter todos os posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Rota para obter um post específico pelo ID
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return res.status(404).json({ message: "Post não encontrado" });
  }

  res.json(post);
});

// Exportar o app para a Vercel
module.exports = app;
