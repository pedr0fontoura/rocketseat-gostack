<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">
  Desafio 06: Banco de dados e upload de arquivos no Node.js
</h3>

<p align="center">
  <a href="#-sobre-a-aplicação">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-específicação-dos-testes">Especificação dos testes</a>
</p>

## 🚀 Sobre a aplicação
Essa aplicação foi desenvolvida para um desafio do Bootcamp GoStack da Rocketseat.

O objetivo do desafio era criar uma aplicação para colocar em prática os conhecimentos em Node.js, TypeScript, banco de dados com TypeORM e relacionamentos envio de arquivos com Multer.

A aplicação armazena transações financeiras de entrada e saída e permite o cadastro e listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo CSV.

O desafio foi entregue no commit [feat: add route to import transactions from a CSV file 14a2109](https://github.com/pedr0fontoura/database-upload/commit/14a2109c7ab4bdeb9fe3bac5d668ae4f8958bf50)

## 💻 Como usar
Para clonar e rodar essa aplicação você vai precisar do [Git](https://git-scm.com), [Node.js v12.18](https://nodejs.org) ou superior e [Yarn v1.21.1](https://yarnpkg.com) ou superior. Da sua linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/pedr0fontoura/database-upload

# Acesse o repositório
$ cd database-upload

# Instale as dependências da aplicação
$ yarn

# Inicie a aplicação
$ yarn start

```

## 🧪 Específicação dos testes
Para a conclusão do desafio a aplicação precisava passar por uma série de testes definidos pela equipe da **Rocketseat**

A lista de testes da mesma maneira que no manual do desafio:

<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio06_tests" para que todos os testes possam executar corretamente ⚠️
</h4>

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

* **`should create tags when inserting new transactions`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o `id` que acabou de ser criado.

- **`should not create tags when they already exists`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o `id` dessa categoria existente, não permitindo a criação de categorias com o mesmo `title`.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa (total de income), retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`.

* **`should be able to delete a transaction`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua uma transação, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

- **`should be able to import transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja importado um arquivo csv, contendo o seguinte [modelo](https://github.com/rocketseat-education/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv). Com o arquivo importado, você deve permitir que seja criado no banco de dados todos os registros e categorias que estavam presentes nesse arquivo, e retornar todas as transactions que foram importadas.
