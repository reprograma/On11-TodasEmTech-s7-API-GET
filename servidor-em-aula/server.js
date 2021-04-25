const filmes = require("./data/ghibli.json")
const { estados }  = require("./data/estados-cidades.json");


const express = require('express');
const { response, request } = require("express");
const app = express();


const port = 3031;

app.get("/", (req, res) => {
    res.status(200).json([{
        "mensagem" : "Blz"
    }])
})

app.get("/filmes", (request, res) => {
    console.log(require.url);
    res.status(200).send(filmes);
})




app.get("/filmes/filtro", (request, response) => {
    console.log(request.url);
    const titulo = request.query.titulo;
    response.status(200).send(filmes.find(filme => filme.title == titulo));
})

//===========================================
// ESTADOS
//============================================


app.get("/estados/todos" , (req, res) => {
    res.status(200).json(estados);
});


app.get("/estados" , (request, response) => {

    const nomeSiglas = estados.map(estado => {
       const {nome, sigla} = estado;
       return { nome, sigla } ;
    });

    response.status(200).json(nomeSiglas);
})



// atencao esse corno trava td que vier abaixo dele
app.get("/filmes/:id", (request, response) => {
    console.log(request.url);
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id));
})


app.get("/estados/:sigla", (request, response) => {
    const siglaReq = request.params.sigla;
    const resEstado = estados.find(estado => estado.sigla == siglaReq);

    if (resEstado)  response.status(200).send(resEstado);
    else response.status(404).send('nao encontrado');

})

app.get("/estados/cidades/:sigla", (request, response) => {
    const siglaReq = request.params.sigla;
    const resEstado = estados.find(estado => estado.sigla == siglaReq);

    if (resEstado)  response.status(200).send(resEstado.cidades);
    else response.status(404).send('nao encontrado');

})





app.listen(port, () => {
    console.log(`rodando na porta : ${port}`)
})