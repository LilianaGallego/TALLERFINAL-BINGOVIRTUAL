const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require("morgan");
const session = require('express-session');
const connectionDB = require("./db.connection");
const methodOverride = require('method-override')
const userRouter = require("./routes/users.routes");
const userLoginRouter = require("./routes/userslogin.Routes");
const flash = require('connect-flash')
const hbs = require('hbs');
const cors = require('cors'); 


/**
 * CONEXION A LA BD
 */
connectionDB();

/**
 * CONFIGURACIONES
 */
app.set("name", "rest-api-login");
app.set("port", process.env.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

/**
 * MIDDLEWARE,
 * 
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
app.use(express.static(path.join(__dirname, 'views')));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(flash());

/**
 * VARIABLE GLOBAL
 */
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});


/**
 * LLAMADO DE RUTAS
 */
app.use(express.static("public"));
app.use("/api/v1", userRouter);
app.use("/api/v1", userLoginRouter);


module.exports = app;
