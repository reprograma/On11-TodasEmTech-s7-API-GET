const estados = require("./data/estados-cidades.json")
const express = require("express");
const app = express();
const port = 3000;

app.get("/estados/todos", (request, response) => {
    console.log(request.url);
    response.status(200).json(estados);
})

app.get("/estados/:sigla", (request, response) => {
    console.log(request.url);
    const sigla = request.params.sigla;
    const estado = estados.find(estado => estado.sigla === sigla.toUpperCase());

    response.status(200).json({
        "nome": estado.nome,
        "sigla": estado.sigla,
        "cidades": estado.cidades
    })
})

app.listen(port, (request, response) => {
    console.log("Server listening on port 3000")
})