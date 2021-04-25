const estadosCidades = require("./data/estados-cidades.json");
const express = require("express");
const app = express();

app.get("/estados/todos", (request, response) => {
  response.status(200).json(estadosCidades);
});

app.get("/estados", (request, response) => {
  const siglaRequisitada = request.params.sigla;
  response
    .status(200)
    .json(
      estadosCidades.find(
        (estadosCidades) => estadosCidades.sigla == siglaRequisitada
      )
    );
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
