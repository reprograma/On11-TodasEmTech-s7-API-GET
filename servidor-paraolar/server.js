const estados = require("./data/estados-cidades.json");
const estadosEcidades = require("./data/estados-cidades.json");

const express = require("express");
const app = express();

app.get("/", (req, resp) => {
    resp.status(200).json([{
        "mensagem": "Salve, infernoooo"
    }])
})


app.get("/estados/todos", (req, resp) => {
    resp.status(200).json(estadosEcidades);

})

app.get("/estados", (req, resp) => {
    let listaEstados = estadosEcidades;
    let estadosJSON = [];

    listaEstados.forEach(element => {
        estadosJSON.push({
            "sigla": element.sigla,
            "nome": element.nome
        })        
    });


    resp.status(200).send(estadosJSON);
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
})