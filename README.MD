<div align="center">

  <h1 align="center"><strong>FORMULA 1 API</strong></h1>
  <p align="center">
    Uma API minimalista para consulta de dados sobre <b>equipes e pilotos</b> de Fórmula 1,<br> desenvolvida com <b>Nodejs</b>, <b>Typescript</b> e <b>Fastify</b>.
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]
  [![Fastify version][fastify-badge]][fastify]

</div>

# 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### 📦 Dependências

- [typescript][typescript-npm] - Superset para desenvolvimento JavaScript em escala
- [tsx][tsx-npm] - TypeScript Execute: Permite ao Node.js executar TypeScript
- [tsup][tsup-npm] - Empacota sua biblioteca TypeScript sem configuração, com esbuild
- [fastify][fastify-npm] - Framework web rápido e eficiente para Node.js
- [@fastify/cors][@fastify/cors-npm] - Plugin CORS para Fastify

### 📄 Estrutura do Projeto

- `src/server.ts` - Configuração e inicialização do servidor Fastify
- `src/repository/teams.ts` - Dados das equipes de Fórmula 1
- `src/repository/drivers.ts` - Dados dos pilotos de Fórmula 1
- `.env` - Variáveis de ambiente
- `tsconfig.json` - Configurações do TypeScript

### ⚙️ Scripts

- `npm run dist`: Compila os arquivos TypeScript para JavaScript no diretório dist.
- `npm run start:dev`: Executa o servidor em modo de desenvolvimento com variáveis de ambiente do arquivo .env.
- `npm run start:watch`: Executa o servidor em modo de desenvolvimento com suporte para recarga automática.
- `npm run start:dist`: Compila o projeto e executa a versão compilada do diretório dist.

## 🚀 Rotas da API

### GET /teams
Retorna todas as equipes de Fórmula 1.

**Exemplo de Resposta:**
```json
{
  "teams": [
    { "id": 1, "name": "Ferrari", "local": "Italy" },
    { "id": 2, "name": "Mercedes", "local": "Germany" }
  ]
}
```

### GET /drivers
Retorna todos os pilotos de Fórmula 1.

**Exemplo de Resposta:**
```json
{
  "drivers": [
    { "id": 1, "name": "Charles Leclerc", "team": "Ferrari" },
    { "id": 2, "name": "Lewis Hamilton", "team": "Mercedes" }
  ]
}
```

### GET /drivers/:id
Retorna um piloto específico pelo ID.

**Exemplo de Resposta (Sucesso):**
```json
{
  "driver": { "id": 1, "name": "Charles Leclerc", "team": "Ferrari" }
}
```

**Exemplo de Resposta (Não encontrado):**
```json
{
  "message": "Driver Not Found"
}
```

# 👨‍💻 Como Usar

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) instalados em seu computador. Da sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/node-formula1-api

# Entre no repositório
$ cd node-formula1-api

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
```

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[fastify]: https://www.fastify.io/
[fastify-badge]: https://img.shields.io/badge/Fastify-4.0-green.svg
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[fastify-npm]: https://www.npmjs.com/package/fastify
[@fastify/cors-npm]: https://www.npmjs.com/package/@fastify/cors
