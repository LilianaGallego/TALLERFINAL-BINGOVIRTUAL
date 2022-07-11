const app = require('./src/app')

/**
 * Configuracion del puerto en el que se ejecuta la api
 */
app.listen(app.get("port"), () => {
  console.log(`listening at http://localhost:${app.get("port")}`);
  console.log("Nombre de la aplicación:", app.get("name"));
});