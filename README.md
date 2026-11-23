# Sofá Novo de Novo · V1

Reformulação responsiva da página inicial, desenvolvida pela dSaOl Web Studio. A V1 mantém a identidade do site oficial e encaminha as páginas individuais de serviço e os pedidos de orçamento aos endereços existentes.

## Abrir no VS Code

Instale [Git](https://git-scm.com/) e [Node.js 24 LTS](https://nodejs.org/). No VS Code, abra a paleta de comandos, selecione **Git: Clone** e informe `https://github.com/Rafadsaol/sofanovodenovo.git`. Se já tiver um clone, abra sua pasta e atualize a branch `main` pelo painel **Controle do Código-Fonte**.

No terminal integrado, a partir da pasta do projeto:

```sh
npm ci
npm run dev
```

Abra `http://localhost:3000`. O ambiente de desenvolvimento recarrega a página ao salvar arquivos locais.

## Sincronizar pelo GitHub

- Para receber alterações na `main`, use **Git: Pull** no VS Code. Se tiver trabalho local em andamento, faça um commit antes de sincronizar.
- Para enviar alterações, faça um commit no painel **Controle do Código-Fonte** e use **Sincronizar Alterações** ou **Git: Push**. Entre na sua conta do GitHub quando solicitado pelo VS Code.
- A detecção de alterações remotas está habilitada neste projeto. As mudanças entram no seu clone depois do pull e chegam ao GitHub depois do push.

## Validar e executar a compilação

```sh
npm run typecheck
npm run build
npm run start
```

A demonstração declara `noindex` na página. Para testar localmente, basta Node.js e npm. O projeto não exige credenciais, banco de dados ou variáveis de ambiente.

## Arquivos principais

| Caminho | Conteúdo |
| --- | --- |
| `app/page.tsx` | Página inicial, serviços, clientes, depoimentos e contato |
| `app/globals.css` | Identidade visual, layout responsivo e microinterações |
| `app/layout.tsx` | Metadados, fontes locais e proteção contra indexação da demonstração |
| `components/header.tsx` | Navegação, dropdowns e menu mobile |
| `components/quote-link.tsx` | Botão de orçamento reutilizável |
| `content/site.ts` | Categorias, URLs oficiais, clientes, contatos e depoimentos |
| `public/` | Logo original, imagens da empresa e logotipos autorizados |
| [docs/v1.md](docs/v1.md) | Referências, testes, pendências e sugestões para a V2 |
