const estadosCidades = require("./data/estados-cidades.json")

const express = require("express") 
const app = express() 


app.get("/estados/todos", (request, response)=>{

    response.status(200).json(estadosCidades)

    
            
        })

        app.get("/estados/sigla", (request, response)=>{
            const estadosRequisitado = request.query.sigla 
            response.status(200).json(estadosCidades.find(estados => estados.sigla == estadosRequisitado))
        })
    
app.listen(8181, ()=>{
    console.log("Funcionando na porta 8181")
})

