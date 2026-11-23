export const officialSite = "https://sofanovodenovo.com.br";
export const officialQuoteUrl = `${officialSite}/redirecionador/`;
export const quoteUrl = "/redirecionador/";

export function serviceQuoteUrl(slug: string) {
  return `${quoteUrl}?servico=${encodeURIComponent(slug)}`;
}

export const contact = {
  phone: "(41) 99665-0037",
  phoneUrl: "tel:+5541996650037",
  address: "Alameda Princesa Izabel, 3000 - A - São Francisco, Curitiba - PR",
  mapUrl: "https://maps.app.goo.gl/y7mFw81HR6X458Hs8",
  company: "Eliane Macedo Cargnin Limpeza LTDA",
  registration: "33.339.682/0001-10",
  social: [
    { label: "Instagram", url: "https://www.instagram.com/sofanovodenovo.oficial/" },
    { label: "Facebook", url: "https://www.facebook.com/sofanovodenovoN" },
    { label: "YouTube", url: "https://www.youtube.com/@sofanovodenovobrasil8067" },
  ],
};

function service<Slug extends string>(label: string, path: Slug) {
  return { label, slug: path, url: `/${path}/` };
}

export const categories = [
  {
    id: "higienizacao",
    title: "Higienização",
    summary: "Limpeza de estofados, colchões, tapetes e carpetes.",
    description: "Higienizamos estofados e tecidos para remover ácaros, fungos, bactérias e sujeiras do dia a dia.",
    services: [
      service("Higienização de sofá", "higienizacao-de-sofa"),
      service("Higienização de colchão", "higienizacao-de-colchao"),
      service("Higienização de cadeira", "higienizacao-de-cadeira"),
      service("Higienização de poltronas", "higienizacao-de-poltronas"),
      service("Higienização de puff", "higienizacao-de-puff"),
      service("Higienização de tapete", "higienizacao-de-tapete"),
      service("Limpeza de carpete", "limpeza-de-carpete"),
      service("Limpeza de tapete", "limpeza-de-tapete"),
    ],
  },
  {
    id: "blindagem",
    title: "Blindagem",
    summary: "Impermeabilização para proteger tecidos e estofados contra manchas.",
    description: "Nosso serviço de blindagem ajuda a proteger o estofado de manchas e a prolongar a vida útil do tecido, preservando a textura e a cor.",
    services: [
      service("Blindagem de sofá", "blindagem-de-sofa"),
      service("Blindagem de cadeira", "blindagem-de-cadeira"),
      service("Blindagem de tecidos", "blindagem-de-tecidos"),
    ],
  },
  {
    id: "veiculos",
    title: "Veículos",
    summary: "Higienização de estofados de veículos terrestres, marítimos e aéreos.",
    description: "Conheça nossos serviços de higienização para carros, barcos, navios, aviões e helicópteros.",
    services: [
      service("Higienização de carro", "higienizacao-de-carro"),
      service("Higienização de barco e navio", "higienizacao-de-barco-e-navio"),
      service("Higienização de avião e helicóptero", "higienizacao-de-aviao-e-helicoptero"),
    ],
  },
  {
    id: "couro",
    title: "Couro",
    summary: "Limpeza e revitalização de estofados em couro.",
    description: "Estofados em couro exigem cuidado especial. Nossa equipe utiliza produtos específicos para higienizar e revitalizar esse material.",
    services: [
      service("Higienização de couro", "higienizacao-de-couro"),
      service("Revitalização de couro", "revitalizacao-de-couro"),
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Talita Depetris",
    quote: "Todas as experiências que tive com a empresa foram maravilhosas. Desde agendamentos, limpezas, impermeabilização, pós e garantia… Recomendo muito a empresa e os serviços.",
  },
  {
    name: "Felipe Costa",
    quote: "Gostamos demais do serviço. Por conta da nossa mudança, nossos móveis ficaram sujos. O serviço deles fez parecer que o móvel chegou agora da fábrica. Impecável!",
  },
  {
    name: "Luciana Bononi Ricardo",
    quote: "O Sr Celso, que esteve na minha residência é educadíssimo e muito cuidadoso com cada detalhe. Usou protetor de sapatos, máscara e formou o piso. Ao terminar, deixou tudo organizado e limpo. Nota 10 em atendimento e qualidade.",
  },
];

export const clients = [
  ["RPC", "rpc"], ["Bradesco", "bradesco"], ["Coco Bambu", "coco-bambu"],
  ["Localiza", "localiza"], ["Itaú Personnalité", "itau-personnalite"], ["Band", "band"],
  ["ibis", "ibis"], ["Lojas MM", "lojas-mm"], ["Pestana", "pestana"],
  ["O Boticário", "boticario"], ["Slaviero", "slaviero"],
];

export type ServiceSlug = (typeof categories)[number]["services"][number]["slug"];

export const services = categories.flatMap(({ id, title, services }) =>
  services.map((service) => ({ ...service, category: id, categoryTitle: title })),
);

export function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}
