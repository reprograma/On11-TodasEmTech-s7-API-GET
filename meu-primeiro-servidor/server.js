// O Express.js é uma framework para Node.js que permite o desenvolvimento de aplicações Web de uma forma muito simples. A instalação do Express.js no ambiente de programação deve ser feito através do NPM. 
//O NPM é um gestor de pacotes para javascript.

//A grosso modo, uma biblioteca JavaScript é um “pedaço de código” reutilizável que pode servir de base para a implementação de outros códigos.

//Um framework JavaScript é uma abstração que combina códigos comuns para serem reutilizados. Ele tem como principal objetivo resolver problemas recorrentes com uma abordagem genérica.
//Assim, o desenvolvedor pode se concentrar em resolver seus problemas ao invés de ficar reescrevendo linhas de código.

//Mas o que difere um framework de uma biblioteca?
// Um framework pode ser um conjunto de bibliotecas ou componentes que são usados para criar uma base para uma aplicação web, no caso do JavaScript.

// npm init dentro da pasta do servidor
// npm install express
// npm install (baixar tudo que está referenciado no package-lock)

const express = require("express") // para requerer o express
const app = express() //para executar o express

app.get("/",(request,response)=>{
    response.status(200).json(["Salve, mundão"]) //vai existir uma resposta, com status 200(status de "deu certo"), uso os colchetes porque o json é uma lista
}) 
//abri um parentese, coloquei a porta, e abri um parentese que vai criar uma request e uma response

app.get("/url", (request,response)=>{
    response.status(200).json(["Mikael","Carol","Brito","Oliveira"])
})
//criando método get com express, a url vai receber uma request e uma response
app.listen(3000, ()=>{  //app (chamando a execução) escute a porta 3000 e faça algo
console.log("meu primeiro servidor (uhuu) rodando na porta 3000")
})



// o ip é um endereço com apartamento, condominio, andar e porta, nesse caso, a nossa porta é a porta 3000, que não está sendo utilizada, ou seja, a porta correta que nosso client pode consultar onde vai ler os dados do nosso API
// arrow function o computador executa uma função
// listen: para que a aplicação foque em algo, ouça algo
//sempre escolher portas acima de 3000, se já estiver sendo utilizada, aparece uma mensagem dizendo q está sendo usada