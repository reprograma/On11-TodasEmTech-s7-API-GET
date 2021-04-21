const filmes = require("./data/ghibli.json")

const express = require("express")
const { response } = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem": "Salve, mundão!"
    }])
})

//"/filmes" retorna lista de todos os filmes
app.get("/filmes", (request, response)=>{
    console.log(request.url)
    response.status(200).json(filmes)
})

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
})