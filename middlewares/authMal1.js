const jwt = require("jsonwebtoken");

// ===================================
//  Verificacion del token que no se firmó
// ===================================
let verificaTokenMal1 = (req, res, next) => {
  /*Obtengo mi header llamado tokenH*/
  let token = req.get("tokenHeader");

  // jwt.verify(token,'', (err, decoded) => {
  //   // el decoded tendra la informacion del usuario

  //   if (err) {
  //     return res.status(401).json({
  //       ok: false,
  //       err,
  //     });
  //   }

  jwt.decode(token, (err, decoded) => {
    // el decoded tendra la informacion del usuario

    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    //Genero un req.usuario para que la prox middle o funcion tenga la info
    req.datos = decoded.datos;
    next();
  });
};

module.exports = {
  verificaTokenMal1,
};
