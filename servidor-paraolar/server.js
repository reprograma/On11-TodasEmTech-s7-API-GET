const estados = require('./data/estados-cidades.json')

const express = require('express')
const app = express()

app.get('/estados', (req, res) => {
  res.status(200).json(estados)
})

app.get('/estados/estado', (req, res) => {
  console.log(req.url)
  const uf = req.query.estado
  const estado = estados.find(estado => estado.sigla === uf)
  let cidades = estado.cidades
  cidades = cidades.join(' - ')

  res.status(200).json({
    "sigla": estado.sigla,
    "nome": estado.nome,
    "cidades": cidades
  })
})
//eu retornei as cidades como uma string pra facilitar a visualização, fiquei em dúvida se era pra retornar como objeto mesmo, por ser mais fácil de manipular pela gata do front.

app.listen(5050, () => {
  console.log('Servidor parolar funcionando na porta 5050')
})