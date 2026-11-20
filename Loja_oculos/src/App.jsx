import "./App.css";

const produtos = [
  { id: 1, nome: "Óculos de grau", preco: "R$ 500,00", tipo: "grau" },
  { id: 2, nome: "Óculos transition", preco: "R$ 750,00", tipo: "transition" },
  { id: 3, nome: "Óculos de sol", preco: "R$ 700,00", tipo: "sol" },
  { id: 4, nome: "Óculos infantil", preco: "R$ 500,00", tipo: "infantil" },
];

const beneficios = [
  "Garantia de 1 ano",
  "Manutenção preventiva",
  "Descontos especiais na compra da segunda unidade",
  "Possibilidade de parcelamento",
];

const cores = {
  grau: { lente: "#f3efe6", aro: "#711e1b" },
  transition: { lente: "#555", aro: "#222" },
  sol: { lente: "#111", aro: "#000" },
  infantil: { lente: "#dfe9f5", aro: "#7b93b8" },
};

function Oculos({ tipo }) {
  const { lente, aro } = cores[tipo] ?? cores.grau;
  return (
    <svg viewBox="0 0 200 80" className="oculos-svg" aria-hidden="true">
      <circle cx="55" cy="40" r="28" fill={lente} stroke={aro} strokeWidth="5" />
      <circle cx="145" cy="40" r="28" fill={lente} stroke={aro} strokeWidth="5" />
      <path d="M83 36 Q100 26 117 36" fill="none" stroke={aro} strokeWidth="5" />
      <path d="M27 36 L8 26 M173 36 L192 26" stroke={aro} strokeWidth="5" />
    </svg>
  );
}

function App() {
  return (
    <>
      {/* CABEÇALHO: logo + navegação principal */}
      <header className="topo">
        <div className="topo-conteudo">
          <a href="#inicio" className="logo" aria-label="Óticas Vista - página inicial">
            <span className="logo-icone" aria-hidden="true">ᵔᵔ</span> óticas
          </a>

          <nav aria-label="Menu principal">
            <ul className="menu">
              <li><a href="#produtos">PRODUTOS</a></li>
              <li><a href="#sobre">SOBRE</a></li>
              <li><a href="#contato">CONTATO</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        {/* BANNER */}
        <section className="hero" id="inicio" aria-labelledby="titulo-hero">
          <div className="hero-texto">
            <p className="hero-pequeno">Preços baixos em</p>
            <h1 id="titulo-hero">
              ÓCULOS DE
              <br />
              GRAU E DE SOL
            </h1>
            <p className="hero-pequeno">Você só encontra aqui</p>
          </div>

      
          <div className="hero-foto" role="img" aria-label="Foto do banner">
            <img src="/imagem_evelyn.png" alt="Óculos em destaque" className="hero-foto" />
          </div>
        </section>
         
        {/* PRODUTOS */}
        <section className="secao" id="produtos" aria-labelledby="titulo-produtos">
          <h2 id="titulo-produtos">NOSSOS PRODUTOS</h2>
          <p className="texto-centro">
            Trabalhamos com óculos de grau, óculos de sol e lentes transition nos modelos
            masculino, feminino e infantil.
            <br />
            Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
          </p>

          <ul className="grade-produtos">
            {produtos.map((p) => (
              <li key={p.id}>
                <article className="card-produto">
                  <h3>{p.nome}</h3>
                  <Oculos tipo={p.tipo} />
                  <p>
                    <strong>{p.preco}</strong>
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <aside className="beneficios" aria-labelledby="titulo-beneficios">
            <p id="titulo-beneficios">Todos os nossos produtos incluem:</p>
            <ul>
              {beneficios.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </aside>
        </section>

        {/* QUEM SOMOS */}
        <section className="secao secao-clara" id="sobre" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre">QUEM SOMOS NÓS?</h2>
          <p className="texto-centro">
            Fundada em 2001, em Nova Iguaçu – Rio de Janeiro, a Óticas Vista iniciou suas
            atividades focada no atendimento ao público de renda mais baixa, sempre com o
            objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
          </p>

          <div className="grade-sobre">
            {/* Quando tiver a foto: <img src={foto1} alt="Interior da loja" className="foto-bloco" /> */}
            <div className="foto-bloco" role="img" aria-label="Foto da loja">
              Foto 1
            </div>

            <article className="texto-bloco">
              <h3>NOSSAS FILIAIS</h3>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
            </article>

            <article className="texto-bloco">
              <h3>ATENDIMENTO FLEXÍVEL</h3>
              <p>Nossa equipe é treinada para te atender.</p>
            </article>

            {/* Quando tiver a foto: <img src={foto2} alt="Atendimento ao cliente" className="foto-bloco" /> */}
            <div className="foto-bloco" role="img" aria-label="Foto do atendimento">
              Foto 2
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ / CONTATO */}
      <footer className="contato" id="contato" aria-labelledby="titulo-contato">
        <h2 id="titulo-contato">FALE CONOSCO</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de
          nossas redes sociais ou da central de atendimento.
        </p>
        <h2>@2022 Óticas Vida. - Todos os direitos reservados</h2>
      </footer>
    </>
  );
}

export default App;