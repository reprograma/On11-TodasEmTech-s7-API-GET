const estados = require("./data/estados-cidades.json")

const express = require("express")

const {response}= require("express")

const app = express ()

app.get("/estados/todos",(request,response)=>{
    response.status(200).json(estados)
})

app.get("/estados/:sigla",(request,response)=>{
    let siglaRequisitada = request.params.sigla 
    response.status(200).json(estados.find(estado=>estado.sigla==siglaRequisitada))

})

app.listen(8080,()=>{
    console.log ("servidor funcionando")
})