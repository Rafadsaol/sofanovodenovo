import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, ChevronDown, ChevronRight, MapPin } from "lucide-react";
import { QuoteLink } from "@/components/quote-link";
import { ServiceGallery } from "@/components/service-gallery";
import { Testimonials } from "@/components/testimonials";
import { serviceFaqs } from "@/content/service-faqs";
import { servicePages } from "@/content/service-pages";
import { categoryBenefits, serviceProcesses } from "@/content/service-process";
import { findService, services } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug);
  if (!service) notFound();
  return {
    title: `${service.label} em Curitiba | Sofá Novo de Novo`,
    description: servicePages[service.slug].description,
  };
}

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug);
  if (!service) notFound();
  const { label, slug, category, categoryTitle } = service;
  const { description, headline, paragraphs, hero, editorial, benefit, related } = servicePages[slug];
  const [heroFile, heroAlt] = hero;
  const [editorialFile, editorialAlt] = editorial;
  const benefits = [benefit, ...categoryBenefits[category]];
  const steps = serviceProcesses[category];
  const faqs = serviceFaqs[slug];

  return (
    <main id="conteudo" className="service-page" data-category={category} tabIndex={-1}>
      <section className="service-hero" aria-labelledby="servico-titulo">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Trilha de navegação">
            <ol>
              <li><Link href="/">Início</Link></li>
              <li><ChevronRight size={13} aria-hidden="true" /><Link href={`/#${category}`}>{categoryTitle}</Link></li>
              <li><ChevronRight size={13} aria-hidden="true" /><span aria-current="page">{label}</span></li>
            </ol>
          </nav>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <p className="eyebrow"><MapPin size={16} aria-hidden="true" /> Curitiba, PR</p>
              <h1 id="servico-titulo">{label}</h1>
              <p className="service-intro">{description}</p>
              <div className="service-hero-actions">
                <QuoteLink service={slug} />
                <a className="text-link" href="#como-funciona">Como funciona <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="service-hero-photo" data-photo={heroFile}>
              <Image src={`/servicos/${heroFile}.webp`} alt={heroAlt} fill preload sizes={category === "veiculos"
                  ? "(min-width: 76rem) 1184px, 95vw"
                  : "(min-width: 75rem) 680px, (min-width: 48rem) 57vw, 95vw"} />
            </div>
          </div>
          <div className="service-trust"><BadgeCheck size={20} aria-hidden="true" /> Equipe certificada da Sofá Novo de Novo</div>
        </div>
      </section>

      <section className="section shell service-benefits" aria-labelledby="beneficios-titulo">
        <div className="section-heading">
          <h2 id="beneficios-titulo">Benefícios do serviço</h2>
        </div>
        <div className="service-benefit-grid">
          {benefits.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process section" id="como-funciona" aria-labelledby="processo-titulo">
        <div className="shell">
          <div className="section-heading"><h2 id="processo-titulo">Como funciona</h2></div>
          <ol className="process-steps">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell service-editorial" aria-labelledby="editorial-titulo">
        <div className="editorial-art">
          <Image src={`/servicos/${editorialFile}.webp`} alt={editorialAlt} fill sizes="(min-width: 75rem) 540px, (min-width: 48rem) 48vw, 92vw" />
        </div>
        <div className="editorial-copy">
          <h2 id="editorial-titulo">{headline}</h2>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {slug === "higienizacao-de-sofa" && <ServiceGallery />}
      <Testimonials />

      <section className="section shell service-faq" aria-labelledby="faq-titulo">
        <div className="section-heading">
          <h2 id="faq-titulo">Perguntas frequentes</h2>
          <p>Sobre {label.toLowerCase()}.</p>
        </div>
        <div className="faq-entries">
          {faqs.map(([question, answer]) => (
            <details name="faq" key={question}>
              <summary>{question} <ChevronDown size={19} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section related-section" aria-labelledby="relacionados-titulo">
        <div className="shell">
          <div className="section-heading"><h2 id="relacionados-titulo">Serviços relacionados</h2></div>
          <ul className="related-grid">
            {related.map((relatedSlug) => {
              const entry = findService(relatedSlug);
              if (!entry) return null;
              const { editorial: [photo] } = servicePages[relatedSlug];
              return (
                <li key={relatedSlug}>
                  <Link href={entry.url} className="related-card">
                    <div className="related-photo">
                      <Image src={`/servicos/${photo}.webp`} alt="" fill sizes="(min-width: 48rem) 31vw, 92vw" />
                    </div>
                    <span className="related-title">{entry.label}<ArrowRight size={18} aria-hidden="true" /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="service-cta" aria-labelledby="orcamento-titulo">
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">{label}</p>
            <h2 id="orcamento-titulo">Vamos conversar sobre o seu orçamento?</h2>
          </div>
          <QuoteLink service={slug}>Pedir orçamento no WhatsApp</QuoteLink>
        </div>
      </section>
    </main>
  );
}
