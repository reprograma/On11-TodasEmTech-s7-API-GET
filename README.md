# On11-TodasEmTech-s7-API-GET
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API: GET

# Principais comando usados

**Para iniciar pela primeira um projeto com node.js**

```bash
npm init -y
```

**Para instalar dependências com npm**

```bash
npm install express
npm install nodemon
```

**Para rodar o servidor**

```bash
npm start
```

Quando usamos o nodemon devemos modificar nossos **scripts de start** dentro do **package.json**

````JavaScrypt
"start": "nodemon server.js"
````

**Para instalar dependências de um projeto com node.js que já foi iniciado**

```bash
npm install
```

## Demanda de Negócio

Dentro do trabalho de desenvolvimento de softwares é bem difícil que trabalhemos sozinhas e na maioria das vezes não seremos nós que decidiremos o que uma API vai fazer. Quando trabalhamos construindo APIs, muitas vezes as necessidades e demandas virão de pessoas não técnicas, serão seus clientes ou a área de negócio que dirão o que querem que sua API faça.
Como por exemplo, essas demandas que vieram para a nossa primeira API: 

- quero poder consultar uma lista dos filmes da ghibli por titulo, id e também a lista completa.
- quero uma api que retorne os Estados e as cidades, tem que conseguir filtrar por sigla
- tem que filtrar somente as cidades pela sigla
- tem que apresentar somente os nomes e as siglas dos estados
- se o usuário digitar errado quero retorno do erro amigavel

Muitas vezes fica pra as desenvolvedoras receber demandas mais abstratas e construir a API que atendam à elas. Nessa caso, a primeira etapa é escrever de forma clara quais serão as necessidades:

- Todas as rotas serão de consulta e leitura, logo, todas se referem ao método GET
- Teremos 2 jsons, um com os filmes da ghibli e outro com uma lista de estados e suas respectivas cidades
- Todas as rotas devem ter tratamentos de erros caso o cliente envie valores invalidos
- A lista de filmes ghibli tem as seguintes demandas:
    - Retornar todos os filmes
    - Pesquisa por nome que retorne o nome, id e descrição
    - Pesquisa por id que retorne o nome, id e descrição
- A lista de estados e cidades tem as seguintes demanadas:
    - Retornar todas os estados e suas cidades
    - Retornar todos os estados e siglas, sem as cidades
    - Pesquisa por sigla que retorne o nome do estado, sigla e suas cidades
    - Pesquisa por sigla que retorne somente as cidades do estado pesquisado

Agora que conseguimos definir bem quais foram as demandas podemos partir para a decisão das rotas da nossa API!

## Rotas

### [GET] "/filmes"

Retorna todos os filmes

### [GET] "/filmes/{id}"

Retorna filme pelo id

### [GET] "/filmes/filtro"

Retorna filme pelo titulo
parâmetros titulo: string

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados"

Retorna somente o nome e a sigla de cada estado

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

### [GET] "/estados/cidades/{sigla}"

Retorna somente as cidades de uma sigla especifica

---

# Para o lar!

Para o lar ficam as seguintes rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

O exercício para o lar devera ser feito dentro da pasta servidor-paraolar. Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

```bash
		\--📂 On11-TodasEmTech-s7-API-GET
			|
			\--📂meu-primeiro-servidor
			|
			\--📂meu-primeiro-servidor
			|				
			**\--📂servidor-paraolar
			    |   server.js
			    📂---data
			    |       estados-cidades.json**
```

Observe que o json de estados-cidades, está um pouco mais simples! **O foco desse exercício é que vocês consigam entender bem quais são os comandos necessários para criar um servidor com node.js**
