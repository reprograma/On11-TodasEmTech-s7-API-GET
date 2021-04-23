/* # Para o lar!
 Para o lar ficam as seguintes rotas das demandas de negócio:

 ### [GET] "/estados/todos"
 Retorna lista completa de estados-cidades

 ### [GET] "/estados/{sigla}"
 Retorna nome, sigla e cidades de uma sigla especifica */

const estados = require("./data/estados-cidades.json")
const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.status(200).json([{"Vamos reprogramar" : "o mundo!"}])
})

app.get("/estados/todos", (request, response) => {
    const estadoRequisitado = request.query.name
    //console.log(estados) - so pra testar se está ok no terminal
    response.status(200).json(estados)
    })

app.get("/estados/filtro", (request, response)=>{
const siglaRequisitada = request.query.abreviacao
response.status(200).json(estados.find(estado => estado.sigla == siglaRequisitada))
})

app.listen(8585, ()=>{
    console.log("O melhor servidor do Brasil funciona na porta 8585")
})