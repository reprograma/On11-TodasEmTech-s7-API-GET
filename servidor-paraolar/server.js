const estados = require("./data/estados-cidades.json")

const {request, response} = require ("express")
const express = require ("express")
const app = express()

app.listen(8005, ()=> {  /// abrindo a porta /// 
    console.log("Servidor Rodando na porta 8005")
})

app.get("/estados/todos", (request,response)=>{ 
    response.status(200).json(estados)
})

app.get("/estados/:sigla", (request,response)=>{ 
    const sigla = request.params.sigla
    response.status(200).json(estados.find(estado => estado.sigla == sigla.toUpperCase()))
})

app.get("/estados/:sigla/nome", (request,response)=>{ 
    const sigla = request.params.sigla
    response.status(200).json(estados.find(estado => estado.sigla == sigla.toUpperCase()).nome)
})

app.get("/estados/:sigla/cidades", (request,response)=>{ 
    const sigla = request.params.sigla
    response.status(200).json(estados.find(estado => estado.sigla == sigla.toUpperCase()).cidades)
})

app.get("/estados/:sigla/cidades/:cidade", (request,response)=>{ 
    const sigla = request.params.sigla
    const cidade = request.params.cidade
    response.status(200).json(estados.find(estado => estado.sigla == sigla.toUpperCase()).cidades.find(city => city == cidade))
})

// for (let index = 0; index < estados.length; index++) {
//     const estado = estados[index];
    
//     if(estado.sigla == sigla){
//         return estado
//     }
// }