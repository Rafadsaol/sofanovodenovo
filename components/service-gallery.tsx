import { BeforeAfter } from "./before-after";

const sofaComparisons = [
  { id: 1, label: "Sofá claro de três lugares", width: 1040, height: 602 },
  { id: 2, label: "Sofá de tecido com dois assentos", width: 700, height: 400 },
];

export function ServiceGallery() {
  return (
    <section className="section service-gallery" aria-labelledby="galeria-titulo">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">Higienização de sofá</p>
          <h2 id="galeria-titulo">Antes e depois</h2>
          <p>Arraste a divisória ou use as setas do teclado para comparar as fotos.</p>
        </div>
        <div className="comparison-grid">
          {sofaComparisons.map(({ id, ...photo }) => (
            <BeforeAfter key={id} {...photo} before={`/servicos/sofa-antes-${id}.webp`} after={`/servicos/sofa-depois-${id}.webp`} />
          ))}
        </div>
      </div>
    </section>
  );
}
