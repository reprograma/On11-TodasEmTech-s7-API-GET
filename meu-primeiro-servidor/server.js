
const express = require('express');
const app = express();

const porta = 3030;


app.get("/", (request, response) => { 
    response.status(200).json(["Primeira API"])
})

app.get("/url", (request, response) => {
    response.status(200).json(["Karlla", "Carol", "Ana"])
})

app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
})
