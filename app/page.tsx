import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BadgeCheck, Droplets, History, Leaf, MapPin, ShieldCheck, Wind } from "lucide-react";
import { Testimonials } from "@/components/testimonials";
import { QuoteLink } from "@/components/quote-link";
import { categories, clients } from "@/content/site";

const categoryPhotos = {
  higienizacao: { width: 288, height: 400, alt: "Profissional higienizando um sofá com equipamento de extração" },
  blindagem: { width: 488, height: 492, alt: "Técnico aplicando impermeabilização em uma poltrona" },
  veiculos: { width: 576, height: 492, alt: "Interior de um veículo com bancos claros" },
  couro: { width: 701, height: 475, alt: "Sofá claro revestido de couro" },
};

const highlights = [
  { icon: Wind, title: "Secagem turbo" },
  { icon: History, title: "Experiência no mercado" },
  { icon: ShieldCheck, title: "Selo Anvisa" },
  { icon: BadgeCheck, title: "Equipe certificada" },
];

const benefits = [
  { icon: BadgeCheck, title: "Técnicos certificados", description: "Equipe treinada para executar os procedimentos de limpeza e blindagem." },
  { icon: Leaf, title: "Produtos seguros", description: "Utilizamos produtos ecológicos e não inflamáveis." },
  { icon: ShieldCheck, title: "Garantia de satisfação", description: "A empresa oferece uma política de garantia de satisfação para seus serviços." },
];

export default function Home() {
  return (
    <main id="conteudo" className="home-page" tabIndex={-1}>
      <section className="hero" id="inicio" aria-labelledby="titulo">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><MapPin size={15} aria-hidden="true" /> Curitiba, PR</p>
            <h1 id="titulo">Limpeza e blindagem <span>de estofados</span></h1>
            <p>Agende a limpeza do seu estofado com a Sofá Novo de Novo. Conte com a nossa tecnologia de secagem turbo.</p>
            <div className="hero-actions">
              <QuoteLink />
              <a className="text-link hero-link" href="#servicos">Conhecer serviços <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/media/embaixador.webp"
              alt="Dr. Bactéria, embaixador oficial da Sofá Novo de Novo, com equipamentos de limpeza"
              width={1024}
              height={923}
              preload
              sizes="(min-width: 75rem) 520px, (min-width: 48rem) 45vw, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="highlights" aria-label="Diferenciais da Sofá Novo de Novo">
        <ul className="shell highlights-grid">
          {highlights.map(({ icon: Icon, title }) => (
            <li key={title}><Icon size={22} aria-hidden="true" /> <span>{title}</span></li>
          ))}
        </ul>
      </section>

      <section className="section shell" id="servicos" aria-labelledby="servicos-titulo">
        <div className="section-heading">
          <p className="eyebrow">Serviços</p>
          <h2 id="servicos-titulo">O que fazemos</h2>
          <p>Limpeza e proteção para a casa, a empresa e o seu veículo.</p>
        </div>
        <div className="cards-grid">
          {categories.map(({ id, title, summary, services }) => (
            <article className="service-card" key={id}>
              <div className="card-photo">
                <Image src={`/media/${id}.webp`} alt="" fill sizes="(min-width: 64rem) 23vw, (min-width: 36rem) 45vw, 90vw" />
              </div>
              <div className="card-copy">
                <h3>{title}</h3>
                <p>{summary}</p>
                <a className="text-link" href={`#${id}`} aria-label={`Ver ${services.length} serviços de ${title.toLowerCase()}`}>
                  {services.length} serviços <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="clients-section section" aria-labelledby="clientes-titulo">
        <div className="shell">
          <div className="section-heading centered">
            <h2 id="clientes-titulo">Nossos clientes</h2>
          </div>
          <ul className="client-grid">
            {clients.map(([name, image]) => (
              <li key={image}>
                <Image src={`/clientes/${image}.webp`} alt={name} width={128} height={128} sizes="96px" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section shell detail-stack">
        {categories.map(({ id, title, description, services }, index) => (
          <section id={id} className="service-detail" data-reverse={index % 2 === 1} key={id} aria-labelledby={`${id}-titulo`}>
            <div className="detail-photo">
              <Image
                src={`/media/${id}.webp`}
                {...categoryPhotos[id]}
                sizes="(min-width: 74rem) 420px, (min-width: 48rem) 45vw, 85vw"
              />
            </div>
            <div className="detail-copy">
              <h2 id={`${id}-titulo`}>{title}</h2>
              <p>{description}</p>
              <ul className="service-links">
                {services.map(({ label, url }) => (
                  <li key={url}><Link href={url}>{label}<ArrowRight size={16} aria-hidden="true" /></Link></li>
                ))}
              </ul>
              <QuoteLink />
            </div>
          </section>
        ))}
      </div>

      <Testimonials />

      <section className="section shell" aria-labelledby="diferenciais-titulo">
        <div className="section-heading">
          <h2 id="diferenciais-titulo">Por que escolher a Sofá Novo de Novo?</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="benefit" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section" id="sobre" aria-labelledby="sobre-titulo">
        <div className="shell about-grid">
          <Image
            src="/media/sobre.webp"
            alt="Equipe da Sofá Novo de Novo reunida em frente à empresa em Curitiba"
            width={730}
            height={492}
            sizes="(min-width: 74rem) 540px, (min-width: 48rem) 48vw, 90vw"
          />
          <div>
            <p className="eyebrow">Sobre nós</p>
            <h2 id="sobre-titulo">Sofá Novo de Novo</h2>
            <p>A Sofá Novo de Novo atua em Curitiba com limpeza e impermeabilização de estofados. A equipe utiliza equipamentos profissionais e produtos ecológicos.</p>
            <p>O processo de blindagem da empresa utiliza nanotecnologia para proteger o tecido e preservar suas características originais, como textura e cor.</p>
            <QuoteLink />
          </div>
        </div>
      </section>

      <section className="contact-band" aria-labelledby="contato-titulo">
        <Image src="/media/banner.webp" alt="" fill sizes="100vw" />
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow"><Droplets size={17} aria-hidden="true" /> Limpeza e blindagem em Curitiba</p>
            <h2 id="contato-titulo">Vamos cuidar do seu estofado?</h2>
          </div>
          <QuoteLink />
        </div>
      </section>
    </main>
  );
}
