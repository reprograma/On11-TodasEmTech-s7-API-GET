const express = require('express'); //chamando o express através do require();
const app = express();   //executando o express armazenando numa variável chamada app por boas práticas;

//agora podemos usar todas as funções do express:

app.get('/', (request, response) => {
  response.status(200).json(['Eai travesti!'])
}) //o primeiro argumento define a rota/recurso, o segundo é uma função com response e request como parametro

app.get('/url', (request, response) => {
  response.status(200).json(['Lilit gostosa'])
}) //a rota/recurso é um endpoint

app.listen(8080, () => { //chamando com listen() [função do js que significa 'observe/foque em'] a execução da porta 3000 pra realizar a função que está no segundo argumento;
   console.log('Meu primeiro servidor Rodando na porta 8080')
})