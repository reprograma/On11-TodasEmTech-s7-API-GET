
const express = require("express");
const app = express();

const estados = require("./data/estados-cidades.json");




app.get( "/estados/todos", (request, response)=>{
    
    response.status(200).json(estados)

})


app.get("/estados/:sigla",(request,response)=>{
    const siglaRequisitada = request.params.sigla 
    response.status(200).json(estados.find(estado=> estado.sigla == siglaRequisitada))

})

app.listen( 8080, ()=>{



   console.log("Está rodando");
})