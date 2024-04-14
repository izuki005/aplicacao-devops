# Instruções de Uso

Este projeto demonstra como criar um servidor web simples usando Node.js e Express, e como fornecer uma API RESTful para acessar os dados dos integrantes.

## Requisitos

Antes de começar, certifique-se de ter o Node.js e o Express.js instalados em sua máquina. Você pode instalar o Node.js em [nodejs.org](https://nodejs.org/), e o Express.js através do comando: npm install express

## Como usar

1. Clone este repositório em sua máquina local:
git clone https://github.com/izuki005/aplicacao-devops

2. Navegue até o diretório do projeto:
cd aplicacao-devops

3. Instale as dependências do projeto:
npm install

4. Execute o servidor:
node app.js

5. O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

6. Para acessar a lista de integrantes do projeto, abra seu navegador e vá para [http://localhost:3000/integrantes](http://localhost:3000/integrantes).

## Estrutura do Projeto

- `app.js`: O arquivo principal que define o servidor Express e suas rotas.
- `src/views/index.html`: O arquivo HTML que será servido quando alguém acessar a raiz do servidor.

## Rotas

- `/`: Rota raiz que serve o arquivo `index.html`.
- `/integrantes`: Rota que retorna um JSON com os integrantes do projeto.