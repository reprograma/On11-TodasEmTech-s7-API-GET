const estadosCidades = require("./data/estados-cidades.json")

const express = require("express");

const app = express();

app.get("/estados/todos" , (request,response)=>{
    response.status(200).send(estadosCidades)
} ) // end point

app.get("/estados/:sigla" , (request,response)=>{
    const UfRequisitado = request.params.sigla
    let resultado;
    estadosCidades.forEach(estado =>{
        if (estado.sigla==UfRequisitado) resultado=estado
    })
    console.log(UfRequisitado)
    response.status(200).json(resultado)
}) // end point



app.listen(3535, ()=>console.log("servidor para o lar rodando na porta 3535"))




















