const estadosCidades = require("./data/estados-cidades.json")

const express = require ("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"Teste servidor"
    }])
})
/** ### [GET] "/estados/todos"

Retorna lista completa de estados-cidades*/
app.get("/estados/todos", (request, response) => {
    response.status(200).json(estadosCidades)
})

/*### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica*/ 
app.get("/estados/:sigla", (request, response)=>{
    const siglaRequisitada = request.params.sigla
    response.status(200).json(estadosCidades.find(estadosCidades => estadosCidades.sigla == siglaRequisitada))
})

app.listen(3030, () =>{ 
    console.log("Servidor rodando na porta 3030")
})