const estados = require("./data/estados-cidades.json")
// o ./ serve para trazer uma pasta que não está na raiz do projeto

const express = require("express")

const { response } = require("express")
// para trazer a biblioteca para o arquivo onde o código irá ficar.

const app = express ()
// executando o express (se atentar que antes a variavel estava apagada, e após dá o const app, ela muda de cor e acende)

app.get("/estados/todos",(request,response)=> {
    response.status(200).json(estados)
})
//para listar todos os estados e cidades que constam na pasta json
// toda a rota recebe uma requisição e manda uma resposta

app.get("/estados/:sigla",(request,response)=>{
    let siglaRequisitada = request.params.sigla 
    response.status(200).json(estados.find(estado=>estado.sigla==siglaRequisitada))

})

app.listen(8080, ()=>{
   console.log("servidor funcionando") 
})


