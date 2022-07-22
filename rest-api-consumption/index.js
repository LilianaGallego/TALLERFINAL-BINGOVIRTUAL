const morgan = require("morgan");
const express = require("express");
const fetch = require("cross-fetch")
const cors = require('cors'); 
const app = express();
const hbs = require('hbs');

/**
 * CONFIGURACIONES
 */
app.set("name", "rest-api-consumption");
app.set("port", process.env.port || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

/**
 * MIDDLEWARE
 */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.options('/', (req, res)  => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader('Access-Control-Allow-Methods', '*'); 
    res.setHeader("Access-Control-Allow-Headers", "*"); 
    res.end(); }); 

app.use(express.static(path.join(__dirname, 'views')));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

/**
 * LLAMADO DE RUTAS
 */
app.use(express.static("public"));

app.post('/', (req, res) => { 
    console.log("Success"); }); 

/**
 * Configuracion del puerto en el que se ejecuta la api
 */
app.listen(app.get("port"), () => {
  console.log(`listening at http://localhost:${app.get("port")}`);
  console.log("Nombre de la aplicación:", app.get("name"));
});