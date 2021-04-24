const estadosCidades = require("./data/estados-cidades.json")

const express = require("express")
const app = express()



app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estadosCidades)
}) //lista completa estados-cidades



app.get("/estados/sigla", (request, response)=>
{
    const siglas = request.query.idSigla
    
    response.status(200).json(estadosCidades.find(siglaE => siglaE.sigla == siglas))
    
})







app.listen(4040, ()=>{
    console.log("testando funcionamento")
})