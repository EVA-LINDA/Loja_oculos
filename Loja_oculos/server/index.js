import express from "express";

const app = express();
const PORTA = 3001;

app.use(express.json());

const produtos = [
  { id: 1, nome: "Óculos de grau", preco: 500, tipo: "grau" },
  { id: 2, nome: "Óculos transition", preco: 750, tipo: "transition" },
  { id: 3, nome: "Óculos de sol", preco: 700, tipo: "sol" },
  { id: 4, nome: "Óculos infantil", preco: 500, tipo: "infantil" },
];

app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/api/produtos/:id", (req, res) => {
  const produto = produtos.find((p) => p.id === Number(req.params.id));
  if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
  res.json(produto);
});
app.get("/", (req, res) => {
  res.send("API da Ótica funcionando! Acesse /api/produtos");
});
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});