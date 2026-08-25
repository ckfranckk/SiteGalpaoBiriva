import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const images = {
  hero: "/images/481814324_1189066569885599_6429074961118629882_n.jpg",
  interior: "/images/300472739_508352911290305_5922262342275235128_n.jpg",
  nature: "/images/185631209_1861923953983381_4208269538700398174_n.jpg",
  fire: "/images/505229815_3061616200680811_709904558938245634_n.jpg",
  pool: "/images/505231436_3061615934014171_595236435169980913_n.jpg",
  stage: "/images/505316243_3061615907347507_5109892525483256687_n.jpg",
  horse: "/images/41755224_1079903338852117_2633116119849762816_n.jpg",
};

const galleryItems = [
  ["/images/483584955_1197092509083005_1796143863515048303_n.jpg", "O espaço"],
  ["/images/505229815_3061616200680811_709904558938245634_n.jpg", "Tradição gaúcha"],
  ["/images/505231436_3061615934014171_595236435169980913_n.jpg", "Área externa"],
  ["/images/505316243_3061615907347507_5109892525483256687_n.jpg", "Eventos e apresentações"],
  ["/images/505361085_3061615857347512_9023914941476328939_n.jpg", "Momentos no Galpão"],
  ["/images/505373181_3061616187347479_541561586860835011_n.jpg", "Celebrações"],
  ["/images/505925832_3061616154014149_8121842937742465412_n.jpg", "Ambientes"],
  ["/images/506352578_3063742917134806_1744936794820546160_n.jpg", "Natureza"],
  ["/images/506407126_3066040836905014_1853119773869822220_n.jpg", "Detalhes"],
  ["/images/480699540_2944288489080250_8027032989754745379_n.jpg", "Encontros"],
  ["/images/480877961_2944288425746923_3308837504489904412_n.jpg", "Eventos"],
  ["/images/480910692_2944288492413583_5625121446950711473_n.jpg", "Cultura"],
  ["/images/481038645_2949879785187787_7564120191203350643_n.jpg", "Tradição"],
  ["/images/481086792_2949879781854454_8822611948906802748_n.jpg", "Acolhimento"],
  ["/images/481814324_1189066569885599_6429074961118629882_n.jpg", "Vivências"],
  ["/images/480659633_2949879728521126_7570311681380352543_n.jpg", "Galpão Biriva"],
  ["/images/472566825_2902028119972954_3223920115358530112_n.jpg", "Histórias"],
  ["/images/39868567_1064675020374949_2616029498700726272_n.jpg", "Autenticidade"],
  ["/images/39883629_1064674987041619_3949129592953896960_n.jpg", "Nossa essência"],
  ["/images/39922600_1064674937041624_2487413125314248704_n.jpg", "Momentos especiais"],
  ["/images/77231399_1390975317744916_6243979044962959360_n.jpg", "Rio Grande do Sul"],
  ["/images/87472516_1486132294895884_2967420809208922112_n.jpg", "Alma gaúcha"],
];

const wa = "https://wa.me/5555991578125?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Galp%C3%A3o%20Biriva.";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Galp%C3%A3o%20Biriva%2C%20Rua%20Mauro%20Alberto%20Hoffmann%2C%20355%2C%20Horizontina%20RS";
const embedMap = "https://www.google.com/maps?q=Rua%20Mauro%20Alberto%20Hoffmann%2C%20355%2C%20Horizontina%20RS&output=embed";

function Index() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const nav = [["home", "Home"], ["sobre", "Sobre nós"], ["servicos", "Serviços"], ["galeria", "Galeria"], ["localizacao", "Como chegar"]];

  return (
    <main className="biriva-site">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Voltar ao início"><span className="brand-mark">GB</span><span><strong>GALPÃO</strong><small>BIRIVA</small></span></button>
        <nav>{nav.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>
        <a className="header-cta" href={wa} target="_blank" rel="noreferrer">Reservar evento</a>
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="hero-overlay" />
        <div className="hero-content"><p className="eyebrow">Horizontina · Rio Grande do Sul</p><div className="hero-logo"><span className="logo-seal">GB</span><h1>GALPÃO <em>BIRIVA</em></h1><div className="ornament"><span />✦<span /></div><p>Celebrações autênticas em meio à natureza</p></div><button className="gold-button" onClick={() => scrollTo("contato")}>Reservar meu evento <span>↗</span></button></div>
        <div className="hero-scroll">role para descobrir <span>↓</span></div>
      </section>

      <section id="sobre" className="intro section-light"><div className="section-kicker">Nossa essência</div><div className="intro-grid"><div className="intro-copy"><h2>A essência do<br /><i>Rio Grande do Sul</i></h2><p className="lead">Um lugar onde tradição, música e hospitalidade se encontram.</p><p>Em Horizontina, o Galpão Biriva nasceu como uma homenagem à memória e ao legado da cultura gaúcha. O espaço reúne arquitetura rústica, encontros, sabores e momentos que carregam a alma do nosso pago.</p><p>Mais do que um local para celebrar, é um cenário para viver experiências autênticas, com o calor da madeira, a natureza ao redor e aquele jeito simples e especial de receber bem.</p><button className="text-link" onClick={() => scrollTo("galeria")}>Conheça o espaço <span>→</span></button></div><div className="intro-visual"><img src={images.interior} alt="Ambiente do Galpão Biriva" /><div className="image-caption"><span>01</span><strong>Tradição em cada detalhe</strong></div></div></div></section>

      <section id="servicos" className="services section-dark"><div className="section-heading center"><div className="section-kicker">O que fazemos</div><h2>Um galpão para <i>viver</i></h2><p>Da primeira conversa ao último acorde, criamos o cenário para a sua celebração.</p></div><div className="service-grid">
        <article className="service-card"><img src={images.interior} alt="Espaço do Galpão Biriva" /><div className="service-body"><span>01 · Eventos</span><h3>Aluguel de Galpão</h3><p>Um ambiente versátil para casamentos, aniversários, encontros familiares e eventos corporativos.</p><a href={wa} target="_blank" rel="noreferrer">Orçamento personalizado ↗</a></div></article>
        <article className="service-card"><img src={images.fire} alt="Experiência gastronômica" /><div className="service-body"><span>02 · Recepção</span><h3>Buffet & Acolhimento</h3><p>Estrutura preparada para receber seus convidados com conforto e um buffet tradicional que combina com a experiência.</p><button onClick={() => scrollTo("contato")}>Consultar detalhes ↗</button></div></article>
        <article className="service-card"><img src={images.stage} alt="Eventos e apresentações" /><div className="service-body"><span>03 · Cultura</span><h3>Cultura & Shows</h3><p>Um palco para música ao vivo, apresentações culturais e noites que ficam na memória.</p><button onClick={() => scrollTo("contato")}>Falar sobre um show ↗</button></div></article>
      </div></section>

      <section id="galeria" className="gallery section-light"><div className="section-heading"><div className="section-kicker">Galeria de experiências</div><h2>Feito para <i>marcar</i></h2></div><div className="gallery-grid">
        {galleryItems.map(([src, caption], i) => <figure key={src} className={i === 0 ? "gallery-tall" : i === 3 || i === 10 ? "gallery-wide" : ""}><img src={src} alt={`${caption} — Galpão Biriva`} loading={i > 5 ? "lazy" : undefined} /><figcaption>{caption}</figcaption></figure>)}
      </div></section>

      <section className="features section-brown"><div className="feature-image"><img src={images.pool} alt="Área externa do Galpão Biriva" /></div><div className="feature-copy"><div className="section-kicker">Detalhes que fazem diferença</div><h2>Um espaço<br /><i>completo</i></h2><p>Natureza, espaços de convivência e elementos que contam histórias. Tudo pensado para que seu evento tenha personalidade do começo ao fim.</p><div className="feature-list"><div><span>01</span><p><strong>Natureza ao redor</strong><br />Um cenário que desacelera e aproxima.</p></div><div><span>02</span><p><strong>Espaços para celebrar</strong><br />Ambientes que se adaptam ao seu momento.</p></div><div><span>03</span><p><strong>Identidade gaúcha</strong><br />Detalhes autênticos em cada canto.</p></div></div></div></section>

      <section className="quotes section-light"><div className="section-kicker center">Quem já viveu</div><h2 className="center">Histórias que ficam</h2><div className="quote-grid">{["Um lugar lindo, acolhedor e cheio de personalidade. A estrutura e o clima fizeram nossa celebração ser ainda mais especial.", "A experiência foi daquelas que a gente leva para a vida. Comida boa, ambiente incrível e aquele jeito gaúcho de receber.", "O Galpão tem uma energia única. Cada detalhe conversa com a história e deixa qualquer encontro muito mais marcante."].map((text, i) => <blockquote key={text}><div className="stars">★★★★★</div><p>“{text}”</p><footer>— Experiência no Galpão Biriva · {i + 1}</footer></blockquote>)}</div></section>

      <section id="localizacao" className="location section-light"><div className="section-heading"><div className="section-kicker">Visite o Galpão</div><h2>Como <i>chegar</i></h2><p>Encontre o Galpão Biriva no mapa e trace sua rota até o espaço.</p></div><div className="location-grid"><div className="map-frame"><iframe title="Mapa do Galpão Biriva" src={embedMap} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-copy"><span className="location-pin">⌖</span><div className="section-kicker">Nossa localização</div><h3>Galpão Biriva</h3><p>Rua Mauro Alberto Hoffmann, 355<br />Bairro Kennedy · Horizontina/RS</p><a className="gold-button" href={mapUrl} target="_blank" rel="noreferrer">Abrir no Google Maps ↗</a><a className="text-link" href={wa} target="_blank" rel="noreferrer">Precisa de ajuda? Fale conosco →</a></div></div></section>

      <section id="contato" className="contact section-dark"><div className="contact-copy"><div className="section-kicker">Vamos conversar</div><h2>Planeje sua<br /><i>experiência</i></h2><p>Conte para nós o que você está imaginando. A gente ajuda a transformar a ideia em um encontro com a cara do Galpão Biriva.</p><div className="contact-actions"><a className="gold-button" href={wa} target="_blank" rel="noreferrer">Falar pelo WhatsApp ↗</a><button className="outline-button" onClick={() => scrollTo("localizacao")}>Como chegar</button></div><div className="contact-meta"><div><span>Endereço</span><strong>Rua Mauro Alberto Hoffmann, 355<br />Bairro Kennedy · Horizontina/RS</strong></div><div><span>Telefone</span><strong>(55) 99157-8125</strong></div></div></div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark">GB</span><div><strong>GALPÃO BIRIVA</strong><small>Celebrações autênticas em meio à natureza</small></div></div><div className="footer-links"><button onClick={() => scrollTo("home")}>Home</button><button onClick={() => scrollTo("sobre")}>Sobre</button><button onClick={() => scrollTo("servicos")}>Serviços</button><button onClick={() => scrollTo("galeria")}>Galeria</button><button onClick={() => scrollTo("localizacao")}>Como chegar</button></div><div className="footer-copy">© {new Date().getFullYear()} Galpão Biriva · Horizontina/RS</div></footer>
    </main>
  );
}
