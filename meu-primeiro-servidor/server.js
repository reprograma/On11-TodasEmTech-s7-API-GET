const { response, request } = require("express")
const express = require("express") // chama o express

const app = express() // executa o express


app.get("/", (request, response) => {
    response.status(200).json(["inhaí"])
})

app.get("/url", (request,response) => {
    response.status(200).json([1,2,3])
})


app.listen(3000, () => { //app (chamando a execução) escute a porta 3000 e faça algo
    console.log("meu primeiro servidor rodando na porta 3000!")

})