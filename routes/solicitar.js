const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// const bcrypt = require("bcrypt");
const _ = require("underscore");

const { verificaToken } = require("../middlewares/autenticacion");

app.post("/pedirToken", (req, res) => {
  console.log("pasando por PEDIRTOKEN");

  const { nombre, apellido, edad } = req.body;

  let datosRecibidos = {
    nombre,
    apellido,
    edad,
  };

  const payload = usuario;
  const secreto = process.env.SEED;
  const options = {
    expiresIn: process.env.CADUCIDAD_TOKEN,
  };

  //Payload, secreto, optoin
  let token = jwt.sign({ datos: datosRecibidos }, secreto, options);

  res.json({
    ok: true,
    token,
  });
});

module.exports = app;
