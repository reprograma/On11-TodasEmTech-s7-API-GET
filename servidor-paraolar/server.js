const estados = require("./data/estados-cidades.json");
const { response, request } = require("express");

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.status(200).json([
    {
      mensagem: "Tudo certo, por aqui!",
    },
  ]);
});

app.get("/estados", (request, response) => {
  response.status(200).json(estados);
});

app.get("/estados/sigla", (request, response) => {
  response.status(200).json(estados);
  for (let i = 0; DF < data[i].estados.length; i++) {
    console.log(data[i].estados[i].sigla.join());
  }
});

app.listen(5000, function (error) {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
    console.log("Tudo na normalidade na porta 5000. Segue o baile!");
  }
});
