# 👓 Óticas Vista — Site de Loja de Óculos

Site institucional e catálogo de produtos de uma ótica, desenvolvido como **projeto prático da [DevMedia](https://www.devmedia.com.br/)**.

O objetivo é colocar em prática o desenvolvimento de uma página web completa com **React** no front-end e **Node.js + Express** no back-end, aplicando HTML semântico, componentização e layout responsivo.

<!-- Coloque aqui um print da página:
![Página inicial do site](./public/print-site.png)
-->

---

## 📌 Sobre o projeto

A Óticas Vista é uma ótica fictícia fundada em 2001, em Nova Iguaçu – RJ, com foco em atendimento de qualidade e preço acessível. O site apresenta a loja, seus produtos e formas de contato.

### Seções da página

| Seção | Conteúdo |
|---|---|
| **Cabeçalho** | Logo da ótica e menu de navegação fixo no topo (Produtos, Sobre, Contato) |
| **Banner (hero)** | Chamada principal "Óculos de grau e de sol" com foto de destaque |
| **Nossos produtos** | Catálogo com óculos de grau, transition, de sol e infantil, com preços e benefícios inclusos |
| **Quem somos nós?** | História da loja, filiais e atendimento, em grade com fotos e textos |
| **Fale conosco** | Rodapé com chamada para contato |

---

## 🚀 Tecnologias utilizadas

**Front-end**
- [React](https://react.dev/) — construção da interface com componentes e JSX
- [Vite](https://vite.dev/) — ambiente de desenvolvimento e build
- CSS3 — layout com Flexbox e Grid, sombras, transições e media queries
- SVG — ilustrações dos óculos geradas por código, com cores por tipo de produto

**Back-end**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) — API REST que fornece os produtos da loja

---

## ✨ Funcionalidades e conceitos aplicados

- **Componentização** — o desenho dos óculos é um componente reutilizável (`<Oculos tipo="sol" />`) que muda de cor conforme o tipo de produto
- **Renderização de listas** — produtos e benefícios gerados a partir de arrays com `.map()`
- **HTML semântico** — uso de `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`
- **Acessibilidade** — hierarquia correta de títulos (`h1` → `h2` → `h3`), textos alternativos em imagens e atributos `aria`
- **Navegação por âncoras** com rolagem suave entre as seções
- **Layout responsivo** — adaptação para telas de celular
- **API REST** com rotas para listar todos os produtos ou buscar um produto pelo `id`

---

## 📁 Estrutura de pastas

```
Loja_oculos/
├── public/            # Imagens públicas (foto do banner)
├── server/
│   └── index.js       # Servidor Express (API de produtos)
├── src/
│   ├── assets/        # Imagens importadas pelo React
│   ├── App.jsx        # Componente principal da página
│   ├── App.css        # Estilos da página
│   ├── index.css      # Estilos globais
│   └── main.jsx       # Ponto de entrada do React
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔌 API

O servidor roda em `http://localhost:3001`.

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/produtos` | Retorna a lista de todos os produtos |
| `GET` | `/api/produtos/:id` | Retorna um produto pelo `id` (ou erro `404` se não existir) |

Exemplo de resposta de `GET /api/produtos/3`:

```json
{ "id": 3, "nome": "Óculos de sol", "preco": 700, "tipo": "sol" }
```

---

## ▶️ Como rodar o projeto

**Pré-requisito:** ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/EVA-LINDA/Loja_oculos.git

# 2. Entre na pasta do projeto
cd Loja_oculos

# 3. Instale as dependências
npm install

# 4. Inicie o back-end (terminal 1)
npm run server

# 5. Inicie o front-end (terminal 2)
npm run dev
```

Depois, abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

---

## 📚 Aprendizados

Neste projeto pratiquei:
- Criação de interfaces com React e JSX
- Organização de dados em arrays e objetos e renderização dinâmica
- Estilização com CSS moderno (Flexbox, Grid, `box-shadow`, `object-fit`, transições)
- Escrita de HTML semântico e acessível
- Criação de uma API com Node.js e Express
- Versionamento com Git e GitHub

---

## 👩‍💻 Autoria

Desenvolvido por **Evelyn Dias** ([@EVA-LINDA](https://github.com/EVA-LINDA)) como projeto prático da **DevMedia**.
