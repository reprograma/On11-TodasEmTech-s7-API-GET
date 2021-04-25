const filmes = require("./data/ghibli.json")

const express = require("express")
const app = express()

app.get("/",(request,response)=>{
    response.status(200).json([{
        "mensagem":"Salve, mundão!!"
    }])
})

app.get("/filmes",(request, response)=>{
    console.log(request.url)
    response.status(200).json(filmes)
})

app.get("/filmes/filtro",(request,response)=>{
    const tituloRequisitado = request.query.titulo
    response.status(200).json(filmes.find(filme =>filme.title == tituloRequisita))
})
app.get("/filmes/identificacao",(request,response)=>{
    const idRequisitado = request.query.identificacao
})
app.listen(3010,()=>{
    console.log("Meu segundo servidor na porta 3010.")
})
