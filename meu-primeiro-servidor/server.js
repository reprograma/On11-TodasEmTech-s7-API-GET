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
