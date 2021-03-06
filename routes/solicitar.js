const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const nodemon = require("nodemon");

// const bcrypt = require("bcrypt");
const _ = require("underscore");

const { verificaToken } = require("../middlewares/autenticacion");

app.post("/pedirToken", (req, res) => {
  console.log("pasando por PEDIRTOKEN");

  const { nombre, apellido, edad } = req.body;

  //payload
  let datosRecibidos = {
    nombre,
    apellido,
    edad,
  };

  const secreto = process.env.SECRET_AUTH;

  const options = {
    algorithm: "none",
    expiresIn: process.env.CADUCIDAD_TOKEN,
  };

  //Payload, secreto, optoin
  // let token = jwt.sign({ datos: datosRecibidos }, secreto, options);
  let token = jwt.sign({ datos: datosRecibidos }, null, options);

  res.json({
    ok: true,
    token,
  });
});

module.exports = app;
