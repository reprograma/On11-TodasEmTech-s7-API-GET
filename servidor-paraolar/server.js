const estadosCidades = require("./data/estados-cidades.json") 
const express = require("express") 
const app = express() 

app.get("/", (request, response)=>{ 
    response.status(200).json([{
        "mensagem":"FUNCIONANDO!"
    }])
})

app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estadosCidades)
})

app.get("estados/sigla", (request, response)=>{
    const estadosSigla = request.query.sigla 
                            
    response.status(200).json(estados.find(estado => estado.sigla == estadosSigla))
})


app.listen(8080, ()=>{
    console.log("Funcionando na porta 8080")
})