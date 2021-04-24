const estadoscidades = require("./data/estados-cidades.json");//reportando o json dos estados e cidades.
const express = require ('express'); //chamei o express
const app = express()// utilizado o nome da const como "app" para boa prática executar

app.get("/", (request, response)=>{
    response.status(200).json(["Fazendo a tarefa da semana 7"])
})

app.listen(3000, () =>{ //app (chamando a execução). Que emoção, a minha segunda arrow function (sintaxe mais curta!). Escute a porta 3000
    console.log("Minha tarefa rodando na porta 3000.")
})

//Retorna todos os estados
app.get("/estados-cidades", (request, response) => {
    console.log(request.url)
    response.status(200).json(data.estados-cidades)
})

//"/estados-cidades" retorna um estado pela lista dos nomes das cidades
app.get("/estados-cidades", (request, response)=>{
    const estado = request.params.estado
    const procurarEstado = data.estados-cidades.find(item=> estado.toUpperCase() == item.sigla)
        })

//pesquisa por nome
app.get("/estados-cidades/retorna", (request, response)=>{
    const siglaoRequisitada = request.query.sigla
    response.status(200).json(estados-cidades.find(cidades => estados-cidades.sigla == siglaoRequisitada))
})
//por sigla
app.get("/estados-cidades/:identificacao", (request, response)=>{
    const idRequisitado = request.params.identificacao
    response.status(200).json(estadoscidades.find(sigla => estadoscidades.sigla == idRequisitado))
    
})

//Em construção...
app.listen(8080, ()=>{
    console.log("Tá funcionando a tarefa da semana 7 na porta 8080")
})
