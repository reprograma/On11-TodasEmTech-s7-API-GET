const estados = require('./data/estados-cidades.json');
const express = require('express');
const app = express();


const port = 3032;



app.get("/estados/todos", (request, response) => response.status(200).send(estados));

app.get("/estados/:sigla", (request, response) => {
    const estado = estados.find(estado => estado.sigla == request.params.sigla);
    if (estado) response.status(200).send(estado);
    else response.status(404);
})

app.listen(port, () => console.log(`rodando na porta ${port}`))