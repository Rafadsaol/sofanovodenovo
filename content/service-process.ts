type Step = readonly [title: string, description: string];

export const serviceProcesses = {
  higienizacao: [
    ["Preparação do ambiente", "A equipe organiza a área de trabalho para proteger o ambiente durante a limpeza."],
    ["Aplicação do produto", "Os produtos e a técnica são escolhidos conforme o revestimento."],
    ["Extração dos resíduos", "A equipe retira o produto e os resíduos soltos durante a limpeza."],
    ["Finalização", "Os equipamentos são recolhidos. Aguarde a secagem completa antes de voltar a usar a superfície."],
  ],
  blindagem: [
    ["Preparação", "A área de aplicação é preparada para proteger o ambiente e a peça."],
    ["Aplicação da blindagem", "O produto impermeabilizante é distribuído sobre o tecido."],
    ["Camada protetora", "A aplicação forma uma proteção que ajuda a repelir líquidos sem mudar o toque do tecido."],
    ["Finalização", "A equipe recolhe o material utilizado e orienta sobre os cuidados com a peça."],
  ],
  veiculos: [
    ["Preparação do veículo", "A equipe organiza o acesso às áreas que receberão a limpeza."],
    ["Limpeza das superfícies", "Os produtos são escolhidos conforme os materiais e as áreas atendidas."],
    ["Remoção dos resíduos", "O tratamento retira os resíduos e o produto das superfícies tratadas."],
    ["Finalização", "O atendimento termina com a retirada dos equipamentos e a organização da área."],
  ],
  couro: [
    ["Preparação da peça", "A equipe prepara a área de trabalho e considera o acabamento do couro."],
    ["Limpeza do couro", "Produtos específicos são aplicados para retirar resíduos do material."],
    ["Hidratação", "O couro é hidratado para ajudar a manter o material flexível e reduzir o ressecamento."],
    ["Finalização", "A equipe recolhe o material utilizado. Respeite a orientação de secagem antes de usar a peça."],
  ],
} satisfies Record<string, readonly Step[]>;

export const categoryBenefits = {
  higienizacao: [
    ["Limpeza profissional", "A extração ajuda a retirar resíduos acumulados na superfície."],
    ["Técnica conforme o tecido", "Material e conservação orientam a escolha dos produtos."],
  ],
  blindagem: [
    ["Proteção contra derramamentos", "O produto ajuda a repelir líquidos e a prevenir manchas."],
    ["Cuidado no dia a dia", "A proteção facilita a manutenção do tecido."],
  ],
  veiculos: [
    ["Atendimento por superfície", "O método considera o material de cada área."],
    ["Detalhamento", "O porte do veículo e as áreas atendidas orientam o serviço."],
  ],
  couro: [
    ["Produtos específicos", "A equipe usa produtos selecionados para o couro."],
    ["Hidratação do material", "O cuidado ajuda a manter a aparência e a flexibilidade do couro."],
  ],
} satisfies Record<keyof typeof serviceProcesses, readonly Step[]>;
