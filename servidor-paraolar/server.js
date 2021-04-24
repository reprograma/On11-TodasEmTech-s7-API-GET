const estados = require("./data/estados-cidades.json");

const express = require("express");
const app = express();

// Rotas
app.get("/estados/todos", (request, response) => {
  response.status(200).json(estados);
});

app.get("/estados/:sigla", (request, response) => {
  const estadoRequesitado = request.params.sigla;
  response.status(200).json(estados.find(estado => estado.sigla == estadoRequesitado));
});

// Listening port
app.listen(3333, () => console.log("Server is running in port 3333"));