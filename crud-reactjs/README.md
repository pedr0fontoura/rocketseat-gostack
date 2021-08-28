<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">
  Desafio 10: GoRestaurant Web
</h3>

<p align="center">
  <a href="#-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-fake-api">Fake API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-fake-api">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-específicação-dos-testes">Especificação dos testes</a>
</p>

## 🚀 Sobre a aplicação
Essa aplicação foi desenvolvida para um desafio do Bootcamp GoStack da Rocketseat.

O objetivo do desafio era aplicar os conhecimentos de Reactjs junto com TypeScript adquiridos no bootcamp, para criar um CRUD.

A aplicação se conecta a uma Fake API, exibe e filtra os pratos de comida, além de permitir a criação, remoção e atualização desses pratos.

O desafio foi entregue no commit [Finish challenge
 f018c6a](https://github.com/pedr0fontoura/gorestaurant/commit/f018c6ae0ececb38c00e4f353e00609245e0138f)

## 💻 Como usar
Para clonar e rodar essa aplicação você vai precisar do [Git](https://git-scm.com), [Node.js v12.18](https://nodejs.org) ou superior e [Yarn v1.21.1](https://yarnpkg.com) ou superior. Da sua linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/pedr0fontoura/gorestaurant

# Acesse o repositório
$ cd gorestaurant

# Instale as dependências da aplicação
$ yarn

# Execute a fake API
$ yarn json-server server.json -p 3333

# Execute a aplicação
$ yarn start
```

## 🧰 Fake API
Para simular os dados da aplicação foi criada uma fake API utilizando **json-server**

O arquivo `server.json` contém os dados para as seguintes rotas:

**Rota `/foods`**: Retorna todas as comidas cadastradas na API

**Rota `/foods/:id`**: Retorna um prato de comida cadastradas na API baseado no `id`

**Rota `/categories`**: Retorna todas as categorias cadastradas na API

**Rota `/orders`**: Retorna todas os pedidos que foram cadastrados na API

**Rota `/favorites`**: Retorna todas as comidas favoritas que foram cadastrados na API

## ✨ Funcionalidades da aplicação
- **`Listar os pratos de comida da sua API`**

- **`Adicionar novos pratos de comida a sua API`**

- **`Editar pratos de comida da sua API`**

- **`Remover pratos de comida da sua API`**

- **`Alterar disponibilidade dos pratos de comida da sua API`**

## 🧪 Específicação dos testes
Para a conclusão do desafio a aplicação precisava passar por uma série de testes definidos pela equipe da **Rocketseat**

A lista de testes da mesma maneira que no manual do desafio:
* **`should be able to list all the food plates from your api`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados, toda os pratos de comidas que são retornadas da sua fake API.

- **`should be able to add a new food plate`**: Para que esse teste passe, você deve permitir que um prato de comida seja adicionado a sua api, adicionando-o também à listagem.

- **`should be able to edit a food plate`**: Para que esse teste passe, você deve permitir que um prato de comida seja editado na sua api, editando-o também na listagem.

- **`should be able to remove a food plate`**: Para que esse teste passe, você deve permitir que um prato de comida seja removido da sua api, removendo-o também da listagem.

- **`should be able to update the availibility of a food plate`**: Para que esse teste passe, em sua dashboard você deve permitir que o status do prato de comida seja alterado entre `Disponível` e `Indisponível`;
