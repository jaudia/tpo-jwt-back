// ===================================
//  Puerto: prod || 3000 (desarrollo)
// ===================================
process.env.PORT = process.env.PORT || 3000;

// ===================================
//  Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================================
//  Vencimiento del token
// ===================================

// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30; (si quiero poner la duracion en segundos): aca son 30 dias
process.env.CADUCIDAD_TOKEN = '1h';


// ===================================
//  SEED de autenticacion
// ===================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
