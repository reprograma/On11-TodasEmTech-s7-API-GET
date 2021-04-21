const express = require("express") //chamei o express, sempre usar aspas duplas
const app = express()//executei o express

app.get("/", (request, response)=>{
    response.status(200).json(["Salve"])
})

app.get("/url", (request, response) =>{
    response.status(200).json(["Emile, Charlie"])
})
app.listen(3000, () => { // app(chamando a execução), para o cumputador "ouça" a porta 3000 e faça algo
    console.log("Meu primeiro servidor rodando na porta 3000")
})