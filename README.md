<h3 align="center">GoMarketplace</h3>
<blockquote align="center">Desafio 08: Fundamentos do React Native</blockquote>

### Sobre a aplicação
Essa aplicação foi desenvolvida para um desafio do Bootcamp GoStack da Rocketseat.

O objetivo do desafio era aplicar alguns fundamentos de React Native junto com TypeScript, como **utilização de rotas**, **Async Storage** e **Context API**.

O desafio foi entregue no commit [feat: add cart total quantity and price 2628b47](https://github.com/pedr0fontoura/gomarketplace/commit/2628b4738ab754acb75b29812223dd39b848c56b)

### Como usar
Para clonar e rodar essa aplicação você vai precisar do [Git](https://git-scm.com), [Node.js v12.18](https://nodejs.org) ou superior e [Yarn v1.21.1](https://yarnpkg.com) ou superior. Da sua linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/pedr0fontoura/gomarketplace

# Acesse o repositório
$ cd gomarketplace

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

### Fake API
Para simular os dados da aplicação foi criada uma fake API utilizando **json-server**

O arquivo `server.json` contém os dados para uma rota `/products` que retorna uma listagem de produtos.

### Funcionalidades da aplicação
- **`Listar os produtos da fake API`**
- **`Adicionar itens ao carrinho`**
-  **`Exibir itens do carrinho`**
-  **`Aumentar quantidade de itens do carrinho`**
- **`Diminuir quantidade de um item do carrinho`**
- **`Exibir valor total dos itens no carrinho`**

### Específicação dos testes
Para a conclusão do desafio a aplicação precisava passar por uma série de testes definidos pela equipe da **Rocketseat**

A lista de testes da mesma maneira que no manual do desafio:
-   **`should be able to list the products`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua tela  `Dashboard`, toda os produtos que são retornadas do Fake API. Essa listagem deve exibir o  `title`  e o  `price`  que deve ser formatado utilizando a função  `Intl`.

-   **`should be able to add a product to the cart`**: Para que esse teste passe, você deve permitir que seja possível adicionar produtos da sua  `Dashboard`  ao carrinho, utilizando o contexto de  `cart`  disponibilizado.

-   **`should be able to list the products on the cart`**: Para que esse teste passe, você deve permitir que seja possível listar os produtos que estão salvos no contexto do seu carrinho na página  `Cart`, nessa página exiba o nome do produto e o subtotal total de cada produto (price * quantity).

-   **`should be able to calculate the cart total`**: Para que esse teste passe, tanto na página  `Dashboard`, tanto na página  `Cart`  você deve exibir o valor total de todos os itens que estão no seu carrinho.

-   **`should be able to show the total quantity of itens in the cart`**: Para que esse teste passe, tanto na página  `Dashboard`, tanto na página  `Cart`  você deve exibir o número total de itens que estão no seu carrinho.

-   **`should be able to increment product quantity on the cart`**: Para que esse teste passe, você deve permitir que seja possível incrementar a quantidade de um produto do seu carrinho, utilizando o contexto de  `cart`  disponibilizado.

-   **`should be able to decrement product quantity on the cart`**: Para que esse teste passe, você deve permitir que seja possível decrementar a quantidade de um produto do seu carrinho, utilizando o contexto de  `cart`  disponibilizado.

-   **`should be able to navigate to the cart`**: Para que esse teste passe, no seu componente  `FloatingCart`  na Dashboard, você deve permitir que ao clicar no botão de carrinho com o testID de  `navigate-to-cart-button`, o usuário seja redirecionado para a página  `Cart`.

-   **`should be able to add products to the cart`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função  `addToCart`  adicione um novo item ao carrinho.

-   **`should be able to increment quantity`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função  `increment`  incremente em  `1`  unidade a quantidade de um item que está armazenado no contexto.

-   **`should be able to decrement quantity`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função  `decrement`  decremente em  `1`  unidade a quantidade de um item que está armazenado no contexto.

-   **`should store products in AsyncStorage while adding, incrementing and decrementing`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho você deve permitir que todas as atualizações que você fizer no carrinho, sejam salvas no AsyncStorage. Por exemplo, ao adicionar um item ao carrinho, adicione-o também no AsyncStorage. Lembre de também atualizar o valor do AsyncStorage quando você incrementar ou decrementar a quantidade de um item.

-   **`should load products from AsyncStorage`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que todos os produtos que foram adicionados sejam buscados do AsyncStorage.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
