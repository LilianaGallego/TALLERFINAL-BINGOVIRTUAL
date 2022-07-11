const path = require("path");
const morgan = require("morgan");
const bcrypt = require('bcrypt');
const express = require("express");
const connectionDB = require("./db.connection");
const methodOverride = require('method-override')
const userRouter = require("./routes/users.routes");
const app = express();
const session = require('express-session');

/**
 * CONEXION A LA BD
 */
connectionDB();

/**
 * CONFIGURACIONES
 */
app.set("name", "rest-api-login");
app.set("port", process.env.port || 3000);

/**
 * MIDDLEWARE
 */
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


/**
 * LLAMADO DE RUTAS
 */
app.use(express.static("public"));
app.use("/api/v1", userRouter);


module.exports = app;
