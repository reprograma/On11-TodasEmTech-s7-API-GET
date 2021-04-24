const estados = require("./data/estados-cidades.json");

const express = require("express");
const app = express();


app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem":"Everything is alright!"
    }]);
});

// Configurar Rotas
app.get("/estados/todos", (request, response) => {
  response.status(200).json(estados);
  
});

//Configurar estado e listas

app.get("/estados/:sigla", (request, response) => {
  const estadoRequesitado = request.params.sigla;
  response.status(200).json(estados.find(estado => estado.sigla == estadoRequesitado));
});

// Configurando porta

app.listen(8000, () => console.log("Server is running in port 8000")); 