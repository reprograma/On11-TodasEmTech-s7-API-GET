const filmes = require('./data/ghibli.json');
const estadosCidades = require('./data/estados-cidades.json');

const express = require('express');
const app = express();

app.get("/filmes", (request, response) => {
  console.log(request.url)
  response.status(200).json(filmes)
})

app.get("/filmes/filtro", (request, response) => { //para query paramns não precisa do :
  console.log(request.url)
  const titulo = request.query.titulo //query params serve para string e elementos mais complexos; titulo é um nome escolhido como rota para receber o request do title
  response.status(200).json(filmes.find(filme => filme.title == titulo))
})

app.get("/estados/todos", (request, response) => {
  response.status(200).json(estadosCidades)
})

app.get("/estados", (request, response) => {
  let listaEstados = estadosCidades.estados
  const estado = listaEstados.map(props => {
        let {nome, sigla} = props
        return {nome, sigla}
      })
  response.status(200).send(estado);
})

//ou

/*
app.get("/estados", (request, response) => {
  let listaEstados = estadosCidades.estados
  let estadosJson = []
  listaEstados.forEach(i => {
    // console.log(i.sigla)
    // console.log(i.nome)
    estadosJson.push({
      "sigla":i.sigla,
      "nome":i.nome
    })
  })
  response.status(200).send(estadosJson);
})
*/


app.get("/filmes/:id", (request, response) => { //para path params, passamos a rota com :nome
  console.log(request.url)
  const id = request.params.id //path params serve para os um único caractere como um id
  response.status(200).send(filmes.find(filme => filme.id == id))   //envia sem transformar em json, se já for um json n precisa usar .json; Usamos find() para encontrar o id na lista filmes, mas poderia usar outros métodos 
})

app.listen(6060, () => {
  console.log('Server funcionando na porta 6060')
})
