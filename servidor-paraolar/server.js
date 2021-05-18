const cidadesEstados = require("./data/estados-cidades.json")//importando o json do filmes
const express = require("express")//importando o express
const app = express()//executando o express

app.get("/estados/todos",(request, response)=>{
    console.log(request.url)
    response.status(200).json(cidadesEstados)
    
})



app.get("/estados/:sigla",(request, response)=>{
    const siglaRequisitada = request.params.sigla
    let estadosJson =[]
    cidadesEstados.forEach(estado=>{

        if(siglaRequisitada == estado.sigla){
            estadosJson.push({
                "sigla": estado.sigla,
                "nome": estado.nome,
                "cidades": estado.cidades
            })
        }
    })
    response.status(200).send(estadosJson)
    
})
















app.listen(8000, ()=>{
    console.log("Funcionando na porta 8000")
})