const filmes = require("./data/ghibli.json")

const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"Salve Mundawn!"
    }])
})

app.get("/filmes", (request, response)=>{
    response.status(200).json(filmes)
})

app.get("/filmes/filtro", (request, response)=>{
    const tituloRequisitado = request.query.titulo
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

app.get("/filmes/:id", (request, response)=>{
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id)) 
})

app.listen(8080, ()=>{
    console.log('Aeee, mais um servidor funcionando');
})