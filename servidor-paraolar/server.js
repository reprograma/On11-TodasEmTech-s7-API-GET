const estadosCidades = require("./data/estados-cidades.json")
const express = require("express") 
const app = express() 

app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estadosCidades)
})


app.get("/estados", (request, response)=>{
    let listadeEstados = estadosCidades.estados
    let novaLista = []
    
    listadeEstados.forEach(estado =>{
        
        novaLista.push({
            "sigla":estado.sigla,
            "nome":estado.nome
        })
    })
    response.status(200).json(novaLista)
})

app.listen(3535, ()=>{
    console.log ("Exercicio funcionando na porta 3535")
})