const filmes = require("./data/ghibli.json")

const express = require("express")

const app = express()


app.get("/", (request, response) => {response.status(200).json([{
    "mensagem": "inhaí"
}])
})


//"/filmes" - retona lista de todos os filmes
app.get("/filmes", (request, response) => {
    console.log(request.url)
    response.status(200).json(filmes)
})

//
app.get("/filmes/:id", (request, response) => {
    //console.log(request.url)
    
    const id = request.params.id
    //console.log(id) 

    response.status(200).send.(filmes.find(filme => filme.id == id))
})

app.listen(8080, () => {
    console.log("a porta 8080 tá funcionando")
})

