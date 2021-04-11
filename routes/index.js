/*Indice de rutas*/

const express = require("express");
const app = express();

//Rutas
app.use(require("./verificar"));
app.use(require("./solicitar"));

module.exports = app;
