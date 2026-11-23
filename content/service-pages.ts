import type { ServiceSlug } from "./site";

type Photo = readonly [file: string, alt: string];
type Point = readonly [title: string, description: string];

type ServicePage = {
  description: string;
  headline: string;
  paragraphs: readonly string[];
  hero: Photo;
  editorial: Photo;
  benefit: Point;
  related: readonly ServiceSlug[];
};

export const servicePages: Record<ServiceSlug, ServicePage> = {
  "higienizacao-de-sofa": {
    description: "Limpeza profissional para sofás de tecido em Curitiba, com tratamento de sujeiras, manchas e odores conforme o material.",
    headline: "Cada tecido pede um cuidado",
    paragraphs: [
      "Sofás de uso diário acumulam poeira, resíduos e odores. A equipe escolhe os produtos e a técnica de limpeza conforme o tecido e as condições do móvel.",
      "O atendimento inclui a extração dos resíduos da limpeza. Para quem busca proteção contra derramamentos depois da higienização, a blindagem é um serviço separado.",
    ],
    hero: ["banner_limpeza_sofa2", "Sofá em uma sala de estar iluminada"],
    editorial: ["higienizacao_limpeza_de_sofa", "Sofá azul de tecido ao lado de uma planta"],
    benefit: ["Conforto no dia a dia", "A limpeza trata resíduos, manchas e odores do uso cotidiano."],
    related: ["blindagem-de-sofa", "higienizacao-de-poltronas", "higienizacao-de-cadeira"],
  },
  "higienizacao-de-colchao": {
    description: "Higienização de colchões em Curitiba, com produtos e técnicas escolhidos conforme o tipo e o estado do material.",
    headline: "Cuidado com a superfície em que você descansa",
    paragraphs: [
      "O colchão recebe uma limpeza profissional voltada para sujeiras acumuladas, manchas e odores. A técnica considera as características do revestimento e a conservação da peça.",
      "Aguarde a secagem completa antes de voltar a usar o colchão. A equipe pode orientar sobre os cuidados de acordo com o material e as condições do ambiente.",
    ],
    hero: ["banner_limpeza_colchao_mobile", "Colchão em um quarto com roupa de cama clara"],
    editorial: ["higienizacao_limpeza_de_colchao", "Cama com colchão e cabeceira azul"],
    benefit: ["Atenção ao revestimento", "A limpeza considera a composição e a conservação do colchão."],
    related: ["higienizacao-de-sofa", "higienizacao-de-poltronas", "higienizacao-de-puff"],
  },
  "higienizacao-de-cadeira": {
    description: "Higienização profissional de cadeiras estofadas em Curitiba para residências e escritórios.",
    headline: "Do assento da sala de jantar à cadeira do escritório",
    paragraphs: [
      "As cadeiras da casa e do trabalho têm revestimentos e usos diferentes. A equipe adapta a higienização ao tecido, à quantidade de peças e ao estado dos assentos.",
      "O serviço trata a sujeira acumulada no estofado com produtos escolhidos para o material. A blindagem pode ser contratada separadamente para ajudar na proteção contra manchas.",
    ],
    hero: ["banner_limpeza_cadeira_mobile", "Cadeiras estofadas em uma sala de jantar"],
    editorial: ["higienizacao_limpeza_de_cadeira", "Cadeira estofada azul perto de uma luminária"],
    benefit: ["Para casa e escritório", "O atendimento se adapta ao tipo e à quantidade de cadeiras."],
    related: ["blindagem-de-cadeira", "higienizacao-de-poltronas", "higienizacao-de-sofa"],
  },
  "higienizacao-de-poltronas": {
    description: "Limpeza de poltronas em Curitiba, com inspeção do tecido e tratamento de resíduos, manchas e odores.",
    headline: "Mais cuidado para a sua poltrona favorita",
    paragraphs: [
      "A equipe inspeciona a poltrona antes de definir como limpar. A avaliação orienta a escolha dos produtos e ajuda a preservar a textura do revestimento.",
      "A higienização trata resíduos do uso diário nos estofados. A frequência pode variar conforme o uso e a exposição a sujeiras.",
    ],
    hero: ["banner_limpeza_poltrona", "Poltrona em um ambiente residencial com piso de madeira"],
    editorial: ["higienizacao_limpeza_de_poltrona", "Poltrona azul estofada junto a uma luminária"],
    benefit: ["Textura preservada", "A avaliação do revestimento orienta a técnica aplicada à poltrona."],
    related: ["higienizacao-de-sofa", "higienizacao-de-cadeira", "higienizacao-de-puff"],
  },
  "higienizacao-de-puff": {
    description: "Higienização de puffs em Curitiba, com limpeza ajustada ao tecido e à conservação de cada peça.",
    headline: "O puff também faz parte da rotina de limpeza",
    paragraphs: [
      "Usado como assento ou apoio, o puff acumula resíduos pelo contato frequente. A limpeza profissional trata sujeiras, manchas e odores do uso cotidiano.",
      "A equipe adapta a técnica ao revestimento para preservar a textura e a cor. O estado e o tamanho da peça influenciam o tempo de atendimento.",
    ],
    hero: ["banner_limpeza_puff", "Puff claro em uma sala com piso de madeira"],
    editorial: ["higienizacao_limpeza_de_puff", "Puff redondo azul em um ambiente decorado"],
    benefit: ["Cuidado com a cor", "O método é escolhido conforme as características do revestimento."],
    related: ["higienizacao-de-poltronas", "higienizacao-de-sofa", "higienizacao-de-cadeira"],
  },
  "higienizacao-de-tapete": {
    description: "Higienização profissional de tapetes em Curitiba com produtos escolhidos conforme o material e o tipo de fibra.",
    headline: "A higienização começa pela fibra",
    paragraphs: [
      "Tapetes acumulam poeira e resíduos nas fibras. A equipe considera o material e a trama antes de aplicar os produtos e tratar manchas ou odores.",
      "Esse cuidado se aplica a tapetes residenciais e de escritório. Depois do atendimento, aguarde a secagem completa antes de voltar a usar a peça.",
    ],
    hero: ["banner_limpeza_tapete", "Tapete claro em uma sala de estar"],
    editorial: ["higienizacao_limpeza_de_tapete", "Tapete azul próximo a um vaso de planta"],
    benefit: ["Atenção à trama", "Os produtos e a técnica são selecionados para as fibras de cada tapete."],
    related: ["limpeza-de-tapete", "limpeza-de-carpete", "higienizacao-de-sofa"],
  },
  "limpeza-de-carpete": {
    description: "Limpeza profissional de carpetes em Curitiba para tratar sujeiras, manchas e odores de ambientes residenciais ou comerciais.",
    headline: "Cuidado com o revestimento de áreas de circulação",
    paragraphs: [
      "A limpeza atende carpetes de diferentes materiais. A equipe considera a fibra e a área a ser atendida para escolher a técnica e os produtos.",
      "O tratamento busca retirar a sujeira acumulada, além de cuidar de manchas e odores. A circulação deve ser retomada depois da secagem do carpete.",
    ],
    hero: ["banner_limpeza_carpete", "Revestimento têxtil no piso de uma sala"],
    editorial: ["banner_limpeza_carpete", "Detalhe do revestimento têxtil em ambiente residencial"],
    benefit: ["Tratamento da área", "O tipo de carpete e a extensão da superfície orientam o atendimento."],
    related: ["limpeza-de-tapete", "higienizacao-de-tapete", "higienizacao-de-cadeira"],
  },
  "limpeza-de-tapete": {
    description: "Limpeza de tapetes em Curitiba para remover sujeiras do dia a dia, com cuidados ajustados ao tipo de fibra.",
    headline: "Limpeza planejada para a sua peça",
    paragraphs: [
      "O serviço considera o tamanho, o tipo e o estado do tapete. A equipe usa produtos específicos para tratar a sujeira e os odores sem comprometer as fibras.",
      "Tapetes de casas e escritórios podem ter ritmos de uso muito diferentes. Informe à equipe o material e as áreas de maior uso ao solicitar o orçamento.",
    ],
    hero: ["banner_limpeza_tapete", "Tapete claro com textura em ambiente residencial"],
    editorial: ["higienizacao_limpeza_de_tapete", "Tapete azul com textura visível"],
    benefit: ["Limpeza conforme a peça", "Tamanho, material e estado do tapete orientam a escolha da técnica."],
    related: ["higienizacao-de-tapete", "limpeza-de-carpete", "higienizacao-de-cadeira"],
  },
  "blindagem-de-sofa": {
    description: "Impermeabilização de sofás em Curitiba para ajudar a repelir derramamentos e facilitar a manutenção do tecido.",
    headline: "Proteção para o sofá que faz parte da rotina",
    paragraphs: [
      "A blindagem aplica uma camada protetora sobre o tecido. Ela ajuda a repelir líquidos e reduzir o risco de manchas causadas por derramamentos.",
      "A aplicação é feita para manter a aparência e o toque do estofado. Consulte a equipe sobre o estado atual do sofá e a necessidade de higienização antes da blindagem.",
    ],
    hero: ["banner_limpeza_sofa2", "Sofá de tecido em uma sala de estar"],
    editorial: ["aplicacao-blindagem", "Técnico da empresa aplicando blindagem em um estofado"],
    benefit: ["Toque do tecido", "A proteção é aplicada para preservar a textura e a cor do sofá."],
    related: ["higienizacao-de-sofa", "blindagem-de-cadeira", "blindagem-de-tecidos"],
  },
  "blindagem-de-cadeira": {
    description: "Blindagem de cadeiras estofadas em Curitiba para ajudar a proteger o tecido de líquidos e manchas do uso diário.",
    headline: "Proteção para cadeiras em uso frequente",
    paragraphs: [
      "Em salas de jantar e outros ambientes de uso constante, derramamentos podem afetar o estofado das cadeiras. A blindagem ajuda a proteger a superfície e facilita a manutenção.",
      "A equipe aplica a proteção conforme o tipo do tecido, preservando a cor, a textura e o conforto dos assentos.",
    ],
    hero: ["banner_limpeza_cadeira_mobile", "Cadeiras de tecido junto a uma mesa de jantar"],
    editorial: ["higienizacao_limpeza_de_cadeira", "Cadeira com assento e encosto estofados"],
    benefit: ["Manutenção dos assentos", "A camada protetora ajuda a lidar com derramamentos do dia a dia."],
    related: ["higienizacao-de-cadeira", "blindagem-de-sofa", "blindagem-de-tecidos"],
  },
  "blindagem-de-tecidos": {
    description: "Proteção de tecidos em Curitiba para estofados, cortinas e almofadas, conforme o material da peça.",
    headline: "Uma camada protetora para tecidos do dia a dia",
    paragraphs: [
      "A blindagem pode ser aplicada a tecidos de sofás, cadeiras, almofadas e cortinas. A equipe considera o tipo de peça antes de definir a aplicação.",
      "O produto forma uma camada protetora que ajuda a repelir líquidos e a preservar o toque, a aparência e a cor do tecido.",
    ],
    hero: ["aplicacao-blindagem", "Profissional aplicando produto protetor em uma poltrona de tecido"],
    editorial: ["higienizacao_limpeza_de_sofa", "Sofá azul revestido de tecido"],
    benefit: ["Mais tipos de peça", "O tratamento pode ser usado em estofados, cortinas e almofadas compatíveis."],
    related: ["blindagem-de-sofa", "blindagem-de-cadeira", "higienizacao-de-sofa"],
  },
  "higienizacao-de-carro": {
    description: "Higienização interna de carros em Curitiba, incluindo bancos, carpetes, painel e superfícies do habitáculo.",
    headline: "A limpeza vai além dos bancos",
    paragraphs: [
      "O serviço abrange bancos, carpetes, painel e outras superfícies internas. Os produtos e técnicas são escolhidos conforme o material de cada área.",
      "A limpeza trata resíduos, manchas e odores do uso cotidiano. Aguarde a secagem indicada antes de retomar o uso do interior.",
    ],
    hero: ["banner_limpeza_carro", "Interior de carro com bancos em couro marrom"],
    editorial: ["higienizacao_limpeza_de_carro2", "Carro azul visto de lado"],
    benefit: ["Cuidado com o interior", "Bancos, painel, carpetes e outras superfícies entram na avaliação."],
    related: ["higienizacao-de-couro", "higienizacao-de-barco-e-navio", "higienizacao-de-aviao-e-helicoptero"],
  },
  "higienizacao-de-barco-e-navio": {
    description: "Limpeza náutica em Curitiba para barcos e navios, com atenção a cabines, estofados, salões e outras áreas da embarcação.",
    headline: "Cuidados específicos para a vida a bordo",
    paragraphs: [
      "O serviço atende cabines, convés, salões e áreas de uso comum. A equipe avalia cada superfície e escolhe produtos adequados para o ambiente náutico.",
      "A limpeza considera resíduos como o salitre, além de manchas e sujeiras. O tempo e o detalhamento dependem do porte da embarcação e das áreas atendidas.",
    ],
    hero: ["banner_limpeza_barcos", "Embarcação navegando em água aberta"],
    editorial: ["higienizacao_limpeza_de_iate", "Iate branco visto de lado"],
    benefit: ["Atenção ao ambiente náutico", "O tratamento considera os materiais da embarcação e a exposição ao salitre."],
    related: ["higienizacao-de-aviao-e-helicoptero", "higienizacao-de-carro", "higienizacao-de-couro"],
  },
  "higienizacao-de-aviao-e-helicoptero": {
    description: "Higienização de aeronaves em Curitiba, com limpeza de assentos, cabines e compartimentos de passageiros.",
    headline: "Preparação cuidadosa de cada área da aeronave",
    paragraphs: [
      "A limpeza abrange a cabine de comando, os assentos e as áreas de passageiros. A equipe seleciona produtos conforme as superfícies atendidas.",
      "O escopo e o tempo de atendimento variam conforme o tamanho da aeronave e o detalhamento solicitado.",
    ],
    hero: ["banner_limpeza_helicoptero", "Helicóptero voando sobre uma área de água"],
    editorial: ["higienizacao_limpeza_de_helicoptero", "Helicóptero azul visto de lado"],
    benefit: ["Detalhamento do interior", "Cabines, assentos e compartimentos recebem atenção conforme o escopo do atendimento."],
    related: ["higienizacao-de-barco-e-navio", "higienizacao-de-carro", "higienizacao-de-couro"],
  },
  "higienizacao-de-couro": {
    description: "Limpeza especializada de sofás, cadeiras e outros itens de couro em Curitiba, com produtos próprios para o material.",
    headline: "Limpeza e hidratação para um material delicado",
    paragraphs: [
      "O couro exige produtos específicos. A equipe avalia o tipo de acabamento e as condições da peça antes de tratar sujeiras, manchas e odores.",
      "Além da limpeza, o processo inclui hidratação do material. Sofás, cadeiras e outros itens de couro recebem cuidados de acordo com sua conservação.",
    ],
    hero: ["banner_limpeza_couro", "Sofá marrom de couro com acabamento capitonê"],
    editorial: ["higienizacao_limpeza_de_couro", "Sofá marrom de couro em fundo claro"],
    benefit: ["Cuidados com o acabamento", "O produto e a técnica são escolhidos conforme o tipo de couro."],
    related: ["revitalizacao-de-couro", "higienizacao-de-carro", "higienizacao-de-sofa"],
  },
  "revitalizacao-de-couro": {
    description: "Revitalização especializada de couro em Curitiba com limpeza e hidratação de peças desgastadas pelo uso.",
    headline: "Cuidado com couro ressecado ou desgastado",
    paragraphs: [
      "A revitalização combina limpeza e hidratação para cuidar da aparência e da flexibilidade do couro. A equipe considera o acabamento e o estado de conservação de cada peça.",
      "O serviço atende sofás, cadeiras, bolsas e outros itens de couro. Informe como a peça está ao solicitar orçamento para que a equipe possa orientar sobre o tratamento adequado.",
    ],
    hero: ["banner_limpeza_couro", "Detalhe de um sofá em couro marrom"],
    editorial: ["higienizacao_limpeza_de_couro", "Sofá de couro com almofadas no assento"],
    benefit: ["Hidratação orientada pela peça", "O tratamento considera as áreas ressecadas e o estado de conservação do couro."],
    related: ["higienizacao-de-couro", "higienizacao-de-sofa", "higienizacao-de-cadeira"],
  },
};
