const filmes = require("./data/ghibli.json") //exportando o json ghibli
const estadosCidades = require("./data/estados-cidades.json")

const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "Olá, amada"
    }])
})

app.get("/filme", (request, response) => {
    console.log(request.url)
    response.status(200).json(filmes)
})


app.get("/filme/filtro", (request, response) => {
    const tituloRequisitado = request.query.titulo
    response.status(200).send(filmes.find(filme => filme.title == tituloRequisitado))
})

app.get("/filme/:id", (request, response) => {
    const idRequisitado = request.params.id // pegamos o parametro que está sendo mandado na request
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado)) //o json cria um json antes, o send envia o que tem
    //metodo find: a primeira coisa é colocar a nossa lista, no caso "filmes", depois vem o comando, ".find", vamos fazer uma pesquisa, que vai verificar cada unidade da lista, no caso, apelidamos isso de "filme". O find vai dizer que o id do objeto filme, se for, ele é igual igual ao da url id, vai retornar esse valor. Vai comparar o id da unidade com o id do parâmetro.
    //filmes: array /find: método /filme: "apelido que demos para UM objeto genérico dentro da array, ex:filmes[i]" /
})

app.get("/estados/todos", (request, response) => {
    response.status(200).json(estadosCidades)
})

app.get("/estados", (request, response) => {
    let listaEstados = estadosCidades.estados
    let estadosJson = []
    listaEstados.forEach(estado => {
        console.log(estado.sigla)
        console.log(estado.nome)

            estadosJson.push({
            "sigla": estado.sigla,
            "nome": estado.nome

        })

    })
    response.status(200).send(estadosJson)
})

app.listen(8080, () => {
    console.log("Isso ai, funfou na porta 8080!")
})
