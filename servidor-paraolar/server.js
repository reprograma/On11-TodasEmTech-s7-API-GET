const estadosCidades = require("./data/estados-cidades.json")

const express = require("express")
const app = express()

//Retorna lista completa de estados-cidades
app.get("/estados/todos", (request, response) => {

    response.status(200).json(estadosCidades)

})

//Retorna nome, sigla e cidades de uma sigla especifica
app.get("/estados/filtro", (request, response) => {

    const siglaRequisitada = request.query.siglas
    response.status(200).json(estadosCidades.find(estado => estado.sigla == siglaRequisitada))
})

app.listen(8080, () => {
    console.log("Teste porta 8080")
})