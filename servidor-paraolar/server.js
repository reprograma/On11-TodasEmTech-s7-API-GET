const paraCasa = require("./data/estados-cidades.json");

const express = require("express");

const app = express();

app.get("/",(request, response) => {
    response.status (200).json([{
        "mensagem":"Salve!"
    }])
}) 


app.get("/paraCasa/estados/todos", (request, response) =>{
    console.log(request.url);
    response.status(200).json(paraCasa)

})

app.get("/paraCasa/estados/sigla", (request, response)=>{
    const sigla1 = request.query.sigla

    response.status(200).json(paraCasa.find(siglas => siglas.sigla == sigla1))
})
app.listen(8080, ()=> {
    console.log("Está funcionando na porta 8080!");
})