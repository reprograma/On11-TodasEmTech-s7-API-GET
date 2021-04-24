const filmes = require("./data/ghibli.json") // importando o json da ghibli
const estadosCidades = require("./data/estados-cidades.json") // importando o sjon estados-cidades

const express = require("express") // importando a express
const app = express() // executando o express

app.get("/", (request, response) => { // request é a pergunta, response é a resposta
    response.status(200).json([{
        "mensagem": "Salve, mundão!"
    }])
})

//"/filmes" retorna lista de todos os filmes
app.get("/filmes", (request, response) => {
    console.log(request.url) //só para verificar a volta da rota
    response.status(200).json(filmes)
})

//  "/filmes/filtro" pesquisa por nome, usando query params
app.get("/filmes/filtro", (request, response) => {
    const tituloRequisitado = request.query.titulo // recebe uma request acessando as query enviadas e aceitando aquela chave titulo
    // array.find(ELEMENTO => titulo dentro de ELEMENTO tem que ser igual ao título requisitado) ele retorna o primeiro que encontrar
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

//"/filmes:id" pesquisa por id, path params
app.get("/filmes/:identificacao", (request, response) => {
    const idRequisitado = request.params.identificacao //recebendo o request ja com a identificação direto na URL

    response.status(200).json(filmes.find(filme => filme.id == idRequisitado))

})

app.get("/estados/todos", (request, response) => {

    response.status(200).json(estadosCidades)

})

// retorna somente nome e sigla de cada estado
app.get("/estados", (request, response) => {

    let listaEstados = estadosCidades.estados
    let estadosJson = []

    // ARRAY.forEach(ELEMENTO =>{ FUNÇÃO })
    listaEstados.forEach(estado => {
        //console.log(estado.sigla) testar o processo de desenvolvimento
        //console.log(estado.nome) 
        // ARRAY.push - ele vai manda um novo elemento no final da lista
        estadosJson.push({ // construção do json de dados existentes
            "sigla": estado.sigla,
            "nome": estado.nome
        })

    })
    response.status(200).send(estadosJson) // pode usar o send e o .json o response tem que ficar fora do loop

})

app.listen(8080, () => {
    console.log("Uhull ta fruncionando na porta 8080")
})