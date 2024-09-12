<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

# Projeto Backend - API Skins de Counter Strike 2

Este é o backend para o projeto de listagem de skins de counter Strike 2 desenvolvido com NestJS, Prisma ORM e MongoDB. O projeto oferece um único endpoint para listar itens, com suporte para filtros e ordenação.

## Endpoints

### Listar Itens

**GET** `/items`

Retorna uma lista de itens (skins) com base nos filtros e parâmetros fornecidos.

#### Parâmetros de Query

- **`name`**: (opcional) Nome do item para filtrar por substring. Tipo: `string`.
- **`category`**: (opcional) Categoria do item. Tipo: `string`.
- **`price`**: (opcional) Faixa de preço do item. Tipo: `number[]`. Exemplo: `[0, 200]`.
- **`float`**: (opcional) Faixa de valores de float do item. Tipo: `number[]`. Exemplo: `[0, 1]`.
- **`orderBy`**: (opcional) Campo para ordenar os itens. Tipo: `string`. Pode ser `price` ou `float`.
- **`orderDirection`**: (opcional) Direção da ordenação. Tipo: `"asc" | "desc"`. Valor padrão: `"asc"`.

#### Exemplo de Request

```http
GET /items?name=Deser&orderBy=price&orderDirection=desc
```

## Faça o clone do projeto

Acesse a pasta que deseja fazer o clone do projeto e rode o comando abaixo

```bash
git clone https://github.com/christopher-alves-dev/cs-skin-store-api.git
```

## Configuração de Variáveis de Ambiente

Para garantir que seu ambiente de desenvolvimento esteja configurado corretamente, você precisará definir algumas variáveis de ambiente. Siga as instruções abaixo para configurar essas variáveis.

### Passo 1: Criar o Arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env`. Esse arquivo será usado para definir suas variáveis de ambiente. O arquivo deve seguir o formato `VARIAVEL=valor`, uma por linha.

### Passo 2: Definir as Variáveis de Ambiente

Você pode utilizar o arquivo de tipagens de env `env.d.ts` na raíz do projeto como exemplo para configurar as variáveis.

## Como Rodar

Para rodar em modo de desenvolvimento.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
