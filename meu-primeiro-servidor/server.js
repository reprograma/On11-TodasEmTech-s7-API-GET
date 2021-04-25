<<<<<<< HEAD
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
=======
const express = require("express") //chamei o express
const app = express() //executar express

app.get("/", (request, response)=>{
    response.status(200).json(["Salve, mundão"])
})

app.get("/url", (request, response)=>{
    response.status(200).json(["Karla", "Caro", "Ana Claudia"])
})

app.listen(3000, ()=>{ 
 console.log("Meu primeiro servidor Rodando na porta 3000")
})

//npm init dentro da pasta do servidor
//npm install express 
//npm install (baixar tudo q esta referenciado no package-lock)
//npm start
>>>>>>> upstream/main
