const estadosCidades = require("./data/estados-cidades.json")

const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "Suuuucesso mundão!"
    }])
})

app.get("/estados/todos", (request, response) => {
    console.log(request.url)
    response.status(200).json(estadosCidades)
})

app.get("/estados/pesquisa", (request, response) => {
    const estadoRequisitado = request.query.siglas

    response.status(200).json(estadosCidades.find(estado => estado.sigla == estadoRequisitado))
})

app.get("/estados", (request, response) => {
    let listaEstados = estadosCidades
    let estadosJson = []
    listaEstados.forEach(estado => {
        console.log(estado.sigla)
        console.log(estado.nome)
        estadosJson.push({
            "sigla": estado.sigla,
            "nome": estado.nome
        })
    })
    response.status(200).send(estadosJson)
})

app.get("/estados/:sigla", (request, response) => {
    const siglaRequisitado = request.params.sigla

    response.status(200).json(estadosCidades.find(siglas => siglas.sigla == siglaRequisitado))
})

app.listen(4040, () => {
    console.log("Eitaaaaa funcionou na porta 4040")
})