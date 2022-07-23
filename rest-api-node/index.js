const morgan = require("morgan");
const express = require("express");
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const path = require('path');
const cors = require('cors'); 

/**
 * CONFIGURACIONES
 */
app.set("name", "rest-api-node");
app.set("port", process.env.port || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
/**
 * MIDDLEWARE
 */
app.use(express.json());
app.use(morgan("dev"));
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

/**
 * LLAMADO DE RUTAS
 */
app.use(express.static("public"));
app.use('/api/v1', indexRouter);
app.use('/api/v1', usersRouter);


/**
 * Configuracion del puerto en el que se ejecuta la api
 */
app.listen(app.get("port"), () => {
  console.log(`listening at http://localhost:${app.get("port")}`);
  console.log("Nombre de la aplicación:", app.get("name"));
});