const estadoCidades = require("./data/estados-cidades.json")

const express = require("express") //chamei o express
const {request, response} = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"Deu bom!"
    }])
})

app.get("/estados", (request, response)=>{
    console.log(request.url)
    response.status(200).json(estadoCidades)
})

app.get("/estados/filtro", (request, response)=>{
    const getSigla = request.query.city
    response.status(200).json(estadoCidades.find(estados => estados.sigla == getSigla))
})

app.listen(3008, ()=>{
    console.log("Tudo certinho!")
})
