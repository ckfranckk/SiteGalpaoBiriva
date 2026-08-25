import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const images = {
  hero: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=88",
  interior: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
  nature: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
  fire: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=85",
  pool: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
  stage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
  horse: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=85",
};

const wa = "https://wa.me/5555991578125?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Galp%C3%A3o%20Biriva.";
const map = "https://www.google.com/maps/search/?api=1&query=Galp%C3%A3o%20Biriva%2C%20Rua%20Mauro%20Alberto%20Hoffmann%2C%20355%2C%20Horizontina%20RS";

function Index() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const nav = [["home", "Home"], ["sobre", "Sobre nós"], ["servicos", "Serviços"], ["galeria", "Galeria"], ["gastronomia", "Gastronomia"], ["contato", "Contato"]];

  return (
    <main className="biriva-site">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Voltar ao início"><span className="brand-mark">GB</span><span><strong>GALPÃO</strong><small>BIRIVA</small></span></button>
        <nav>{nav.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>
        <a className="header-cta" href={wa} target="_blank" rel="noreferrer">Reservar evento</a>
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="hero-overlay" /><div className="hero-content"><p className="eyebrow">Horizontina · Rio Grande do Sul</p><div className="hero-logo"><span className="logo-seal">GB</span><h1>GALPÃO <em>BIRIVA</em></h1><div className="ornament"><span />✦<span /></div><p>Celebrações autênticas em meio à natureza</p></div><button className="gold-button" onClick={() => scrollTo("contato")}>Reservar meu evento <span>↗</span></button></div><div className="hero-scroll">role para descobrir <span>↓</span></div>
      </section>

      <section id="sobre" className="intro section-light"><div className="section-kicker">Nossa essência</div><div className="intro-grid"><div className="intro-copy"><h2>A essência do<br /><i>Rio Grande do Sul</i></h2><p className="lead">Um lugar onde tradição, música e hospitalidade se encontram.</p><p>Em Horizontina, o Galpão Biriva nasceu como uma homenagem à memória e ao legado da música gaúcha. O espaço reúne arquitetura rústica, encontros, sabores e momentos que carregam a alma do nosso pago.</p><p>Mais do que um local para celebrar, é um cenário para viver experiências autênticas, com o calor da madeira, a natureza ao redor e aquele jeito simples e especial de receber bem.</p><button className="text-link" onClick={() => scrollTo("galeria")}>Conheça o espaço <span>→</span></button></div><div className="intro-visual"><img src={images.interior} alt="Ambiente rústico e acolhedor" /><div className="image-caption"><span>01</span><strong>Tradição em cada detalhe</strong></div></div></div></section>

      <section id="servicos" className="services section-dark"><div className="section-heading center"><div className="section-kicker">O que fazemos</div><h2>Um galpão para <i>viver</i></h2><p>Da primeira conversa ao último acorde, criamos o cenário para a sua celebração.</p></div><div className="service-grid">
        <article className="service-card"><img src={images.interior} alt="Salão do Galpão Biriva" /><div className="service-body"><span>01 · Eventos</span><h3>Aluguel de Galpão</h3><p>Um ambiente versátil para casamentos, aniversários, encontros familiares e eventos corporativos.</p><a href={wa} target="_blank" rel="noreferrer">Orçamento personalizado ↗</a></div></article>
        <article id="gastronomia" className="service-card"><img src={images.fire} alt="Churrasco e gastronomia" /><div className="service-body"><span>02 · Sabores</span><h3>Gastronomia Gaúcha</h3><p>Sabores que unem: jantares temáticos, churrasco e experiências gastronômicas com identidade regional.</p><button onClick={() => scrollTo("contato")}>Consultar experiências ↗</button></div></article>
        <article className="service-card"><img src={images.stage} alt="Palco para música e eventos" /><div className="service-body"><span>03 · Cultura</span><h3>Cultura & Shows</h3><p>Um palco para música ao vivo, apresentações culturais e noites que ficam na memória.</p><button onClick={() => scrollTo("contato")}>Falar sobre um show ↗</button></div></article>
      </div></section>

      <section id="galeria" className="gallery section-light"><div className="section-heading"><div className="section-kicker">Galeria de experiências</div><h2>Feito para <i>marcar</i></h2></div><div className="gallery-grid"><figure className="gallery-tall"><img src={images.nature} alt="Natureza ao redor do galpão" /><figcaption>Natureza & acolhimento</figcaption></figure><figure><img src={images.pool} alt="Área externa" /><figcaption>Lazer externo</figcaption></figure><figure><img src={images.fire} alt="Gastronomia" /><figcaption>Gastronomia</figcaption></figure><figure className="gallery-wide"><img src={images.stage} alt="Palco e música" /><figcaption>Palco de emoções</figcaption></figure><figure><img src={images.horse} alt="Elemento campeiro" /><figcaption>Alma campeira</figcaption></figure></div></section>

      <section className="features section-brown"><div className="feature-image"><img src={images.pool} alt="Refúgio cercado pela natureza" /></div><div className="feature-copy"><div className="section-kicker">Detalhes que fazem diferença</div><h2>Um refúgio<br /><i>completo</i></h2><p>Natureza, espaços de convivência e elementos que contam histórias. Tudo pensado para que seu evento tenha personalidade do começo ao fim.</p><div className="feature-list"><div><span>01</span><p><strong>Natureza ao redor</strong><br />Um cenário que desacelera e aproxima.</p></div><div><span>02</span><p><strong>Espaços para celebrar</strong><br />Ambientes que se adaptam ao seu momento.</p></div><div><span>03</span><p><strong>Identidade gaúcha</strong><br />Detalhes autênticos em cada canto.</p></div></div></div></section>

      <section className="quotes section-light"><div className="section-kicker center">Quem já viveu</div><h2 className="center">Histórias que ficam</h2><div className="quote-grid">{["Um lugar lindo, acolhedor e cheio de personalidade. A estrutura e o clima fizeram nossa celebração ser ainda mais especial.", "A experiência foi daquelas que a gente leva para a vida. Comida boa, ambiente incrível e aquele jeito gaúcho de receber.", "O Galpão tem uma energia única. Cada detalhe conversa com a história e deixa qualquer encontro muito mais marcante."].map((text, i) => <blockquote key={text}><div className="stars">★★★★★</div><p>“{text}”</p><footer>— Experiência no Galpão Biriva · {i + 1}</footer></blockquote>)}</div></section>

      <section id="contato" className="contact section-dark"><div className="contact-copy"><div className="section-kicker">Vamos conversar</div><h2>Planeje sua<br /><i>experiência</i></h2><p>Conte para nós o que você está imaginando. A gente ajuda a transformar a ideia em um encontro com a cara do Galpão Biriva.</p><div className="contact-actions"><a className="gold-button" href={wa} target="_blank" rel="noreferrer">Falar pelo WhatsApp ↗</a><a className="outline-button" href={map} target="_blank" rel="noreferrer">Como chegar</a></div><div className="contact-meta"><div><span>Endereço</span><strong>Rua Mauro Alberto Hoffmann, 355<br />Bairro Kennedy · Horizontina/RS</strong></div><div><span>Telefone</span><strong>(55) 99157-8125</strong></div></div></div><div className="map-card"><div className="map-pattern"><span>GALPÃO<br /><strong>BIRIVA</strong></span><small>HORIZONTINA · RS</small></div><a href={map} target="_blank" rel="noreferrer">Abrir no Google Maps ↗</a></div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark">GB</span><div><strong>GALPÃO BIRIVA</strong><small>Celebrações autênticas em meio à natureza</small></div></div><div className="footer-links"><button onClick={() => scrollTo("sobre")}>Sobre</button><button onClick={() => scrollTo("servicos")}>Serviços</button><button onClick={() => scrollTo("galeria")}>Galeria</button><button onClick={() => scrollTo("contato")}>Contato</button></div><div className="footer-copy">© {new Date().getFullYear()} Galpão Biriva · Horizontina/RS</div></footer>
    </main>
  );
}
