const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// const bcrypt = require("bcrypt");
const _ = require("underscore");

const { verificaToken } = require("../middlewares/autenticacion");

app.get("/verificarToken", verificaToken, (req, res) => {
  console.log("pasando por VERIFICAR TOKEN");

  res.json({
    ok: true,
    respuesta: "Correcto",
    datos: req.datos,
  });
});

module.exports = app;
