const estados = require("./data/estados-cidades.json");

const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"ESTÁ TUDO CERTO!"
    }]);
});

//retorna lista completa de estados-cidades
app.get("/estados/all", (request, response) => {
    response.status(200).json(estados);
});


// retorna nome, sigla e cidades de uma sigla especifica usando o path params
app.get("/estados/:sigla", (request, response)=>{
    const siglas = request.params.sigla;
    response.status(200).json(estados.find(estado => estado.sigla == siglas));
    
});

app.listen(8000, () =>{
    console.log("Esta funcinando na porta 8000!");
});


// Outra maneira de retorna nome, sigla e cidades de uma sigla especifica usando o query params
// app.get("/estados/filtro", (request, response) => {
//     const siglaRequerida = request.query.sigla;
//     response.status(200).send(estados.find(estado => estado.sigla == siglaRequerida));
// });