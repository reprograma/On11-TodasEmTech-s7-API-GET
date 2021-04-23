const filmes = require("./data/ghibli.json") //importando o json da ghibli
const estadosCidades = require("./data/estados-cidades.json")

const express = require("express") //importando express
const app = express() //executando express

app.get("/", (request, response)=>{ 
    response.status(200).json([{
        "mensagem":"Salve, mundão!"
    }])
})

//"/filmes" retorna lista de todos os filmes
app.get("/filmes", (request, response)=>{
    console.log(request.url)
    response.status(200).json(filmes)
})

//"/filmes/filtro" pesquisa por nome, usando query params
app.get("/filmes/filtro", (request, response)=>{
    const tituloRequisitado = request.query.titulo //recebendo request acessando as query enviadas e aceitando somente aquela chave titulo
                            //ARRAY.find(ELEMENTO => titulo dentro de ELEMENTO tem que ser igual ao titulo requisitado) ele retorna o primeiro que encontrar
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

//"/filmes:id" pesquisa por id, path params
app.get("/filmes/:id", (request, response)=>{
    const id = request.params.id //rebendo o request ja com a identificação direto na URL
    response.status(200).json(filmes.find(filme => filme.id == id))
    
})

app.get("/estados/all", (request, response)=>{
    response.status(200).json(estadosCidades)
})

// retorna nome, sigla e cidades de uma sigla especifica 
app.get("/estados/filtro", (request, response) => {
    const siglaRequerida = request.query.sigla;
    response.status(200).send(estadosCidades.find(estado => estado.sigla == siglaRequerida));
});


//retorna somente nome e sigla de cada estados
app.get("/estados", (request, response)=>{
    let listaEstados = estadosCidades.estados
    let estadosJson = []
    //ARRAY.forEach(ELEMENTO =>{ FUNÇAO })
    listaEstados.forEach(estado =>{
        //ARRAY.push
        estadosJson.push({
            "sigla":estado.sigla,
            "nome":estado.nome
        })
    })
    response.status(200).send(estadosJson)
})

app.listen(8080, ()=>{
    console.log("Está funcionando na porta 8080")
})