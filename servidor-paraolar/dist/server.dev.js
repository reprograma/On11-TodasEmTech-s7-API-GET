"use strict";

var estadosCidades = require("./data/estados-cidades.json");

var express = require("express");

var app = express();
app.get("/estados/todos", function (request, response) {
  response.status(200).json(estadosCidades);
});