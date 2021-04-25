const express = require("express") //chamei o express
const app = express() //express foi executado

app.get("/",(request,response)=>{
    response.status(200).json(["Salve,mundão!"])
})

app.get("/nomes",(request,response)=>{
    response.status(200).json(["Larissa","Cleonice","Vandete"])
})

app.listen(3000,()=>{ //chamei a execução
    console.log("Meu primeiro servidor rodando na porta 3000.")
})
