//criando um servidor
const { response } = require("express")
const express = require("express") //chamei o express
const app = express() //executar o express

app.get("/", (request, response) =>{
    response.status(200).json(["Salve, mundão"])
})

app.get("/url", (request, response) =>{
    response.status(200).json(["Karlla, Carol, Ana Claudia"])
})

app.listen(3000, ()=>{ //app (chamando a execução) escute a porta 3000 e faça algo
console.log("Meu primeiro servidor rodando na porta 3000")
})

//npm init dentro da pasta do servidor
//npm install express (uma ferramenta que serve para facilitar... no node.js)
//npm install (baixar tudo q está referenciado no package-lock)