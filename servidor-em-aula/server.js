<<<<<<< HEAD
const filmes = require("./data/ghibli.json")

const express = require("express")
const { response } = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem": "Salve, mundão!"
=======
const filmes = require("./data/ghibli.json") //importando o json da ghibli
const estadosCidades = require("./data/estados-cidades.json")

const express = require("express") //importando express
const app = express() //executando express

app.get("/", (request, response)=>{ 
    response.status(200).json([{
        "mensagem":"Salve, mundão!"
>>>>>>> 68f589f7937a7e8aec71c07ff936ae324f656e04
    }])
})

//"/filmes" retorna lista de todos os filmes
app.get("/filmes", (request, response)=>{
    console.log(request.url)
    response.status(200).json(filmes)
})

<<<<<<< HEAD
app.get("/filme/titulo", (request, response)=>{
    const tituloRequisitado = request.query.titulo

    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

app.get("/filmes/:id", (request, response)=>{
    const idRequisitado = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado)) //pode ser send ou json

})
app.listen(8080, ()=> {
    console.log("Uhuuull ta funcionando na porta 8080")
=======
//"/filmes/filtro" pesquisa por nome, usando query params
app.get("/filmes/filtro", (request, response)=>{
    const tituloRequisitado = request.query.titulo //recebendo request acessando as query enviadas e aceitando somente aquela chave titulo
                            //ARRAY.find(ELEMENTO => titulo dentro de ELEMENTO tem que ser igual ao titulo requisitado) ele retorna o primeiro que encontrar
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

//"/filmes:id" pesquisa por id, path params
app.get("/filmes/:identificacao", (request, response)=>{
    const idRequisitado = request.params.identificacao //rebendo o request ja com a identificação direto na URL

    response.status(200).json(filmes.find(filme => filme.id == idRequisitado))
    
})

app.get("/estados/todos", (request, response)=>{
    response.status(200).json(estadosCidades)
})

//retorna somente nome e sigla de cada estados
app.get("/estados", (request, response)=>{
    let listaEstados = estadosCidades.estados
    let estadosJson = []
    //ARRAY.forEach(ELEMENTO =>{ FUNÇAO })
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
>>>>>>> 68f589f7937a7e8aec71c07ff936ae324f656e04
})