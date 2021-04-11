const jwt = require("jsonwebtoken");

// ===================================
//  Verificacion del token
// ===================================
let verificaToken = (req, res, next) => {
  /*Obtengo mi header llamado tokenH*/
  let token = req.get("tokenHeader");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
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
  verificaToken,
};
