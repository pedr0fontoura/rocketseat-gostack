<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">
  Desafio 09: Relacionamentos com banco de dados no Node.js
</h3>

<p align="center">
  <a href="#-sobre-a-aplicação">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-específicação-dos-testes">Especificação dos testes</a>
</p>

## 🚀 Sobre a aplicação
Essa aplicação foi desenvolvida para um desafio do Bootcamp GoStack da Rocketseat.

O objetivo do desafio era criar uma aplicação para colocar em prática os conhecimentos em Node.js, TypeScript, banco e dados com TypeORM e relacionamentos ManyToMany adquiridos durante o bootcamp.

O desafio foi entregue no commit [Finish orders module 4de1016](https://github.com/pedr0fontoura/database-relations/commit/4de1016a01dd686bd280e9af0d67e9accc5c8bd4)

## 💻 Como usar
Para clonar e rodar essa aplicação você vai precisar do [Git](https://git-scm.com), [Node.js v12.18](https://nodejs.org) ou superior e [Yarn v1.21.1](https://yarnpkg.com) ou superior. Da sua linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/pedr0fontoura/database-relations

# Acesse o repositório
$ cd database-relations

# Instale as dependências da aplicação
$ yarn

# Inicie a aplicação
$ yarn dev:server

```

## 🧪 Específicação dos testes
Para a conclusão do desafio a aplicação precisava passar por uma série de testes definidos pela equipe da **Rocketseat**

A lista de testes da mesma maneira que no manual do desafio:

<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio09_tests" para que todos os testes possam executar corretamente ⚠️
</h4>

- **`should be able to create a new customer`**: Para que esse teste passe, sua aplicação deve permitir que um cliente seja criado, e retorne um json com o cliente criado.

- **`should not be able to create a customer with one e-mail thats already registered`**: Para que esse teste passe, sua aplicação deve retornar um erro quando você tentar cadastrar um cliente com um e-mail que já esteja cadastrado no banco de dados.

- **`should be able to create a new product`**: Para que esse teste passe, sua aplicação deve permitir que um produto seja criado, e retorne um json com o produto criado.

- **`should not be able to create a duplicated product`**: Para que esse teste passe, sua aplicação deve retornar um erro quando você tentar cadastrar um produto com um nome que já esteja cadastrado no banco de dados.

- **`should be able to create a new order`**: Para que esse teste passe, sua aplicação deve permitir que um pedido seja criado, e retorne um json com o todos os dados do pedido criado.

- **`should not be able to create an order with a invalid customer`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um cliente que não existe no banco de dados, retornando um erro.

- **`should not be able to create an order with invalid products`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um produtos que não existem no banco de dados, retornando um erro caso um ou mais dos produtos enviados não exista no banco de dados.

- **`should not be able to create an order with products with insufficient quantities`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um produtos que não possuem quantidade disponível, retornando um erro caso um ou mais dos produtos enviados não possua a quantidade necessária.

- **`should be able to subtract an product total quantity when it is ordered`**: Para que esse teste passe, sua aplicação deve permitir que, quando um novo pedido for criado, seja alterada a quantidade total dos produtos baseado na quantidade pedida.

- **`should be able to list one specific order`**: Para que esse teste passe, você deve permitir que a rota `orders/:id` retorne um pedido, contendo todas as informações do pedido com o relacionamento de `customer` e `order_products`.
