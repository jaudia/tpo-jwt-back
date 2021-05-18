require("./config/config");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const path = require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/*Configuracion global de rutas*/
app.use(require("./routes/index"));


app.listen(process.env.PORT, () => {
  console.log(`Escuchando en el puerto ${process.env.PORT}`);
});


