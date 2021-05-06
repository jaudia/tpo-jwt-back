const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// const bcrypt = require("bcrypt");
const _ = require("underscore");

const { verificaTokenMal1 } = require("../middlewares/authMal1");

app.get("/verificarTokenMal1", verificaTokenMal1, (req, res) => {
  console.log("pasando por VERIFICAR TOKEN MAL 1");

  res.json({
    ok: true,
    respuesta: "Correcto",
    datos: req.datos,
  });
});

module.exports = app;
