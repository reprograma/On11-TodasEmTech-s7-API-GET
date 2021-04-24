const estados = require("./data/estados-cidades.json")

const express = require("express")
const app = express()

app.get("/" , (request, response)=>{
    response.status(200).json([{
        "mensagem": "Oii, servidor funcionando!"
    }])
})

app.get("/estados", (request, response)=>{
    response.status(200).json(estados)
})

app.get("/estados/filtro", (request, response)=>{
    const estadoRequesitado = request.query.siglaa

    response.status(200).json(estados.find(estado => estado.sigla == estadoRequesitado))
})

app.listen(2020, ()=>{
    console.log("Server funfando na porta 2020 ;3")
})