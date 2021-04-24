const estadosCidades = require("./data/estados-cidades.json");

const express = require("express")
const app = express();

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "Conexão realizada com sucesso"
    }])
})

app.get("/estados", (request, response) => {
    response.status(200).json(estadosCidades)
}
)

app.get("/estados/:sigla", (request, response) => {
    let siglaRequisitada = request.params.sigla
    response.status(200).send(estadosCidades.find(estados => estados.sigla == siglaRequisitada))

}
)


app.listen(3443, () => { console.log("Rodando na porta 3443 certinho") })

