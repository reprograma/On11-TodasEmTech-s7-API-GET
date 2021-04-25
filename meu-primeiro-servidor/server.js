const { request, response } = require("express");
const express = require("express") //chama o express
const app = express()              //executar

app.get("/", (request, response)=>{
    response.status(200).json(['Oi menina!'])
})

app.get("/url", (request, response)=>{
    response.status(200).json(['Karla', 'Thamiris', 'Ana', 'Carolina'])
})

app.listen(3030, () =>{            //app (chamando a execução) escute a porta 3030 e faça algo
    console.log('Meu primeiro, nem tao primeiro assim, servidor rodando na porta 3030');
} )