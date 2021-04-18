const { request, response } = require("express")
const express = require("express") // chamando o express //
const app = express() // executar o express

app.get("/", (request,response)=>{ // "/" - mostra a rota // json - lista com objetos
    response.status(200).json(["Hello Word"]) //execução da função // forma padrão da resposta// json - lista com objetos
})

app.get("/lista-de-compras", (request,response)=>{ // forma padrão do get - função pronta que executa a função get - leitura - no http
    response.status(200).json(["Arroz", "Carne"]) // json - lista com objetos
})

app.listen(8001, ()=> { //2° comando apos, chamar o express e executa-lo// app() chamando a execução da aplicação, listen (função padrão do js) sempre acima de 3 mim e essa será a porta do servidor
    console.log("Meu primeiro sevidor rodando na porta 8001")
}) 

