const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const connectionDB = async () => {
  try {
    const DB = await mongoose.connect("mongodb://localhost:27017/Login");

    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log("Conexion exitosa a la BD", DB.connection.name);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectionDB;