import { Quote } from "lucide-react";
import { officialSite, testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="depoimentos-titulo">
      <div className="shell">
        <div className="section-heading">
          <h2 id="depoimentos-titulo">O que nossos clientes dizem</h2>
          <p>Depoimentos sobre a empresa publicados no <a href={officialSite}>site oficial</a>.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(({ name, quote }) => (
            <figure className="testimonial" key={name}>
              <Quote size={26} aria-hidden="true" />
              <blockquote><p>{quote}</p></blockquote>
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
