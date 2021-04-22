    const estados = require("./data/estados-cidades.json");
      
    const express = require("express");

    const app = express();

    app.get("/estados/todos", (request, response)=>{
        console.log(request.url);
        response.status(200).json(estados);
    })

    app.get("/estados/sigla", (request,response) =>{
        const siglaEstado = request.query.sigla
        response.status(200).json(estados.find(estado => estado.sigla == siglaEstado));
    })

    app.listen(8080, ()=> {
        console.log("Verificando porta 8080");
    })