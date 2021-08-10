<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">
  Desafio 07: GoFinances Web
</h3>

<p align="center">
  <a href="#-sobre-a-aplicação">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-específicação-dos-testes">Especificação dos testes</a>
</p>

## 🚀 Sobre a aplicação
Essa aplicação foi desenvolvida para um desafio do Bootcamp GoStack da Rocketseat.

O objetivo do desafio era criar uma aplicação para colocar em prática os conhecimentos em React.js, TypeScript, utilizando rotas e envio de arquivos por formulário adquiridos durante o bootcamp.

A aplicação se conecta com o backend feito no [Desafio 06: Banco de dados e upload de arquivos no Node.js](https://github.com/pedr0fontoura/database-upload) e exibe as transações criadas, além de permitir a importação de um arquivo CSV para gerar novos registros no banco de dados.

O desafio foi entregue no commit [feat: add hability to import transactions from a csv file fb60bc5](https://github.com/pedr0fontoura/fundamentos-reactjs/commit/fb60bc5b394fb342934d07f57af9384b59000f3c)

## 💻 Como usar
Para clonar e rodar essa aplicação você vai precisar do [Git](https://git-scm.com), [Node.js v12.18](https://nodejs.org) ou superior e [Yarn v1.21.1](https://yarnpkg.com) ou superior. Da sua linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/pedr0fontoura/fundamentos-reactjs

# Acesse o repositório
$ cd fundamentos-reactjs

# Instale as dependências da aplicação
$ yarn

# Inicie a aplicação
$ yarn start

```

## 🧪 Específicação dos testes
Para a conclusão do desafio a aplicação precisava passar por uma série de testes definidos pela equipe da **Rocketseat**

A lista de testes da mesma maneira que no manual do desafio:

- **`should be able to list the total balance inside the cards`**: Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de `income`, `outcome` e o total da subtração de `income - outcome` que são retornados pelo balance do seu backend.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.

- **`should be able to navigate to the import page`**: Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome `Importar`.

- **`should be able to upload a file`**: Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de `import`, e que seja possível exibir o nome do arquivo enviado para o input.
