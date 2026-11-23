import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { categories, contact } from "@/content/site";
import { QuoteLink } from "./quote-link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand-link">
              <Image src="/brand/logo.png" alt="Sofá Novo de Novo — início" width={120} height={56} />
            </Link>
            <p>Higienização e blindagem de estofados em Curitiba.</p>
          </div>
          <nav aria-label="Categorias de serviços">
            <h2>Serviços</h2>
            <ul>
              {categories.map(({ id, title }) => <li key={id}><Link href={`/#${id}`}>{title}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2>Contato</h2>
            <address>
              <a href={contact.phoneUrl}><Phone size={16} aria-hidden="true" /> {contact.phone}</a>
              <a href={contact.mapUrl}><MapPin size={17} aria-hidden="true" /> {contact.address}</a>
            </address>
            <QuoteLink className="footer-quote">Chamar no WhatsApp</QuoteLink>
          </div>
          <div>
            <h2>Redes sociais</h2>
            <ul>
              {contact.social.map(({ label, url }) => <li key={url}><a href={url}>{label}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <p>{contact.company} · CNPJ {contact.registration}</p>
          <p>Site original por <a href="https://igniscriativa.com.br/">Ignis Criativa</a></p>
        </div>
      </div>
    </footer>
  );
}
