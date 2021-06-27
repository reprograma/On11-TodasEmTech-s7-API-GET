const app = express();

app.get("/estados/cidades", (req, res) => {
  res.status(200).json(estados);
});

//filtrar sigla diretamente na url;
app.get("/estados/:sigla", (req, res)=>{
  let siglaRequisitada = req.params.sigla;
  res.status(200).json(estados.find(estado => estado.sigla == siglaRequisitada));
})

app.get("/estados/sigla", (req, res)=>{
  let siglaRequisitada = req.query.sigla;
  res.status(200).json(estados.find(estado => estado.sigla == siglaRequisitada));
})

app.listen(6068, () => {
  console.log("servidor ok");
}) 