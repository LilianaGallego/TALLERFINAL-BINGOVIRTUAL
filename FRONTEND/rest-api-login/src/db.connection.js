const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

/**
 * Funcion para conectar con la base de datos
 *
 * @version 1.0.0 2022-07-10
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const connectionDB = async () => {
  try {
    /**
     * constante para conectar la api con la base de datos
     */
    const DB = await mongoose.connect("mongodb://localhost:27017/Login");

    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log("Conexion exitosa a la BD", DB.connection.name);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectionDB;