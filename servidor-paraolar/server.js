const estadosCidades = require("./data/estados-cidades.json")

const express = require("express") //importando express

// Pegando dependencias

const app = express() //executando express

app.get("/", (request, response)=>{ 
    response.status(200).json([{
        "mensagem":"Olá Brasil!"
    }])
})

app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estadosCidades)
})

//retorna somente nome, sigla e cidades uma sigla especifica 

app.get("/estados/:sigla", (request, response)=>{

    const siglaReq = request.params.sigla
    let estadosJson = []

    estadosCidades.forEach(estado =>{

        if(siglaReq == estado.sigla){
            estadosJson.push({
                "sigla":estado.sigla,
                "nome":estado.nome,
                "cidades": estado.cidades
            })
            response.status(200).send(estadosJson)
        }
    })   

})

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000!")
}) 