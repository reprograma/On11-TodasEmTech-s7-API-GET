

const express = require("express") // para requerer o express
const app = express() //para executar o express

app.get("/", (request, response) => {
    response.status(200).json(["Salve, mundão"]) //vai existir uma resposta, com status 200(status de "deu certo"), uso os colchetes porque o json é uma lista
})
//abri um parentese, coloquei a porta, e abri um parentese que vai criar uma request e uma response

app.get("/url", (request, response) => {
    response.status(200).json(["Mikael", "Carol", "Brito", "Oliveira"])
})
//criando método get com express, a url vai receber uma request e uma response
app.listen(3000, () => {  //app (chamando a execução) escute a porta 3000 e faça algo
    console.log("meu primeiro servidor (uhuu) rodando na porta 3000")
})

