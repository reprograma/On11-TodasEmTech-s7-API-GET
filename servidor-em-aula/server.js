const filmes = require("./data/ghibli.json") // para vincular o arquivo json no arquivo java script // para andar entre pastas ("./") ("../")

const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "Mensagen": "Consegui!"
    }])
})

app.get("/filmes", (request, response) =>{ // retorna lista de todos os files // 
    console.log(request.url)
    response.status(200).json(filmes)
})

app.get("/filmes/filtro", (request, response) =>{     //////apelido para a unidade que você esta chamando)
    const titulo = request.query.titulo
    response.status(200).json(filmes.find(filme => filme.title == titulo ))
    
})

app.get("/filmes/:id", (request, response) =>{  
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id ))
})

app.listen(8002, ()=> {  /// abrindo a porta /// 
    console.log("Servidor Rodando na porta 8002")
})

