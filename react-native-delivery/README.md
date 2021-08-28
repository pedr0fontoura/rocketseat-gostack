<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">
  Desafio 11: GoRestaurant Mobile
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

O objetivo do desafio era aplicar o conhecimento de React Native junto com TypeScript adquirido no bootcamp, para criar um pequeno app para pedidos de comida.

A aplicação se conecta a uma Fake API, exibe e filtra os pratos de comida, além de permitir a criação de novos pedidos.

O desafio foi entregue no commit [End react-native-delivery challenge
 beb41e5](https://github.com/pedr0fontoura/react-native-delivery/commit/beb41e59e8795640f87dc8019028511d817ed011)

## 💻 Como usar
Para clonar e rodar essa aplicação você vai precisar do [Git](https://git-scm.com), [Node.js v12.18](https://nodejs.org) ou superior e [Yarn v1.21.1](https://yarnpkg.com) ou superior. Da sua linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/pedr0fontoura/react-native-delivery

# Acesse o repositório
$ cd react-native-delivery

# Instale as dependências da aplicação
$ yarn

# Execute a fake API
$ yarn json-server server.json -p 3333

# Execute o React Native
$ yarn start

# Execute o aplicativo (Android)
$ yarn android

# Execute o aplicativo (iOS)
$ yarn ios
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
- **`Listar os pratos de comida da API`**

- **`Listar as categorias da API`**

## 🧪 Específicação dos testes
Para a conclusão do desafio a aplicação precisava passar por uma série de testes definidos pela equipe da **Rocketseat**

A lista de testes da mesma maneira que no manual do desafio:
- **`should be able to list the food plates`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua `Dashboard`, todos os pratos de comidas que são retornados da sua fake API.

- **`should be able to list the food plates filtered by category`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua `Dashboard`, os pratos de comidas filtrados por categoria da sua fake API.

- **`should be able to list the food plates filtered by name search`**:  Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua `Dashboard`, os pratos de comidas filtrados por nome da sua fake API.

- **`should be able to navigate to the food details page`**: Para que esse teste passe, em sua `Dashboard`, você deve permitir que ao clicar em um item, seja navegado para a página `FoodDetails` passando por parâmetro da navegação o id do item clicado.

- **`should be able to list the favorite food plates`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua página `Favorites`, todos os pratos de comidas que estão salvos na rota `favorites`.

- **`should be able to list the orders`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua página `Orders`, todos os pratos de comidas que estão salvos na rota `orders`.

- **`should be able to list the food`**: Para que esse teste passe, sua aplicação deve permitir que seja listado todos os dados de uma comída específica na página `FoodDetails`, baseado no id recuperado pelos parametros da rota.

- **`should be able to increment food quantity`**: Para que esse teste passe, você deve permitir que seja incrementada em 1 a quantidade do item na página `FoodDetails`.

- **`should be able to decrement food quantity`**: Para que esse teste passe, você deve permitir que seja decrementada em 1 a quantidade do item na página `FoodDetails`.

- **`should not be able to decrement food quantity below than 1`**: Para que esse teste passe, você deve impedir que seja decrementado a quantidade de itens até um número menor que 1, assim o número mínimo de itens no pedido é 1.

- **`should be able to increment an extra item quantity`**: Para que esse teste passe, você deve permitir que seja incrementada em 1 a quantidade de um ingrediente extra na página `FoodDetails` baseado no seu id.

- **`should be able to decrement an extra item quantity`**: Para que esse teste passe, você deve permitir que seja decrementado em 1 a quantidade de um ingrediente extra na página `FoodDetails` baseado no seu id.
