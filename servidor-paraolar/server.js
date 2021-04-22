    const estados = require("./data/estados-cidades.json") // constante que chama o json

    const express = require("express") // constante que chama o express
    const app = express() //executar o express
    
    app.get("/", (request, response)=>{
        response.status(200).json([{
            "mensagem":"Salve, mundo."}])
    })

    app.get("/estados/todos", (request, response)=>{ //retorna o json estados.cidades
        console.log(request.url)
        response.status(200).json(estados)
    })
    
    app.get("/estados/filtro", (request, response)=>{
        const siglaRequisitada = request.query.siglas
        response.status(200).send(estados.find(uf => uf.sigla == siglaRequisitada))
    })

    app.listen(3010, ()=>{ // escuta a porta selecionada e faz um comando
        console.log("Salve mundão!")
    })