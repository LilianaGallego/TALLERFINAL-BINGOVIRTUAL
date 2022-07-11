const app = require('./src/app')

app.listen(app.get("port"), () => {
  console.log(`listening at http://localhost:${app.get("port")}`);
  console.log("Nombre de la aplicación:", app.get("name"));
});