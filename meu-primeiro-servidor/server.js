const filmes = require("./data/ghibli.json")
const express = require("express")// chamei express
const app = express() //executar

app.get("/",(request, response)=>{
response.status(200).json([{
    "mensagem":"salve, mundão!"
}])
})

app.get("/filmes",(request, response)=>{
    console.log(request.url)
    response.status(200).json(filmes)
})

app.get("/url", (request, response)=>{
    response.status(200).json(["Karlla","Carol","Ana Claudia"])
})

app.listen(3000, ()=>{
    console.log("meu primeiro servidor Rodando na porta 3000")

})