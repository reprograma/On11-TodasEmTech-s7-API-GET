const estados = require("./data/estados-cidades.json")


const express = require("express") 
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["Oiee!"])
})


app.get("/estados", (request, response)=>{
    console.log(request.url)
    response.status(200).json(estados)
})

app.get("/estados/filtro", (request, response)=>{
    const siglaRequisitado = request.query.sigla
    response.status(200).json(estados.find(estados => estados.sigla == siglaRequisitado))
})


app.listen(8070, ()=>{
    console.log("meu segundo servidor na porta 8070")
})

