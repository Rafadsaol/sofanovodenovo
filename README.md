# Sofá Novo de Novo · V2

Redesign responsivo da home e das 16 páginas de serviços, desenvolvido pela dSaOl Web Studio. Os serviços fazem parte da própria aplicação e os pedidos de orçamento seguem para o WhatsApp comercial.

## Abrir no VS Code

Instale [Git](https://git-scm.com/) e [Node.js 24 LTS](https://nodejs.org/). No VS Code, abra a paleta de comandos, selecione **Git: Clone** e informe `https://github.com/Rafadsaol/sofanovodenovo.git`. Se já tiver um clone, abra sua pasta e atualize a branch `main` pelo painel **Controle do Código-Fonte**.

Abra no VS Code a pasta `sofanovodenovo`, onde fica o `package.json`. No terminal integrado, execute os comandos abaixo. Em PowerShell, use `npm.cmd` se a política do sistema impedir a execução de `npm.ps1`.

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

As 17 páginas da demonstração declaram `noindex`. Para testar localmente, basta Node.js e npm. O projeto não exige credenciais, banco de dados ou variáveis de ambiente.

## Arquivos principais

| Caminho | Conteúdo |
| --- | --- |
| `app/page.tsx` | Página inicial, serviços, clientes, depoimentos e contato |
| `app/[slug]/page.tsx` | Layout e metadados das 16 páginas de serviços |
| `app/redirecionador/route.ts` | Fluxo oficial de orçamento e contexto do serviço no WhatsApp |
| `app/globals.css` e `app/service.css` | Identidade visual, composições e microinterações |
| `app/layout.tsx` | Metadados, fontes locais e proteção contra indexação da demonstração |
| `components/header.tsx` | Navegação, dropdowns e menu mobile |
| `components/` | Menu, rodapé, orçamento, depoimentos e comparador |
| `content/` | Rotas, contatos, páginas, etapas, perguntas e respostas |
| `public/` | Logo original, imagens da empresa e logotipos autorizados |
| [docs/v2.md](docs/v2.md) | Inventário das rotas, testes da V2 e revisão de conteúdo |
| [docs/v1.md](docs/v1.md) | Registro da versão anterior |
