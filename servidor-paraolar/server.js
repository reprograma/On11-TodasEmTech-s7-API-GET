const estados = require("./data/estados-cidades.json")
const express = require("express");

const app = express();

app.get("/estados/cidades", (req, res) => {
  res.status(200).json(estados);
});

app.get("/estados/:sigla", (req, res)=>{
  let siglaRequisitada = req.params.sigla;
  res.status(200).json(estados.find(estado => estado.sigla == siglaRequisitada));
})

app.listen(8080, () => {
  console.log("está funcionando...");
})