const filmes = require("./data/ghibli.json")

const express = require("express")
const app = express()

app.get("/", (request, response) => {
response.status(200).json([{"mensagem em forma de objeto - atributo ": "oi - valor "}])
})

app.get("/filmes", (request, response) =>{
    console.log(request.url)  //necessário só pra testar a rota no terminal
    response.status(200).json(filmes) //retorna a lista completa
})

app.get("/filmes/filtro", (request, response)=>{
    const tituloRequisitado = request.query.titulo

    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

app.get("/filmes/:identificacao", (request, response)=>{
    const idRequisitado = request.params.identificacao

    response.status(200).json(filmes.find(filme => filme.id == idRequisitado))
    
})

app.listen(7171, ()=>{
    console.log("Meu servidor na rota da Bruxa do 7171 funciona")
})