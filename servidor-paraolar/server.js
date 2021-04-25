const estados = require("./data/estados-cidades.json")

const express = require("express")
const app = express()

app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estados)
})

app.get("/estados/:sigla", (request, response)=>{
    const idRequisitado = request.params.sigla

    response.status(200).json(estados.find(estado => estado.sigla == idRequisitado))
})

app.listen(8080, ()=>{
    console.log("Foi... Amém!")
})
