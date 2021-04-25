const filmes = require("./data/ghibli.json")
const estadosCidades = require("./data/estados-cidades.json")

const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"Salve Mundawn!"
    }])
})

app.get("/filmes", (request, response)=>{
    response.status(200).json(filmes)
})

app.get("/filmes/filtro", (request, response)=>{
    const tituloRequisitado = request.query.titulo
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

app.get("/filmes/:id", (request, response)=>{
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id)) 
})

app.listen(8080, ()=>{
    console.log('Aeee, mais um servidor funcionando');
})


app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estadosCidades)
})

//retorna somente nome e sigla de cada estados
app.get("/estados", (request, response)=>{
    let listaEstados = estadosCidades.estados
    let estadosJson = []
    
    listaEstados.forEach(estado =>{
        //ARRAY.push
        estadosJson.push({
            "sigla":estado.sigla,
            "nome":estado.nome
        })
    })
    response.status(200).send(estadosJson)
})

app.listen(8080, ()=>{
    console.log("Uhull ta fruncionando na porta 8080")
})