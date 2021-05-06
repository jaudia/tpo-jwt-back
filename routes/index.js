/*Indice de rutas*/

const express = require("express");
const app = express();

//Rutas
app.use(require("./solicitar"));
app.use(require("./verificar"));

//Sin firma
app.use(require("./solicitarMal1"));
app.use(require("./verificarMal1"));

module.exports = app;
