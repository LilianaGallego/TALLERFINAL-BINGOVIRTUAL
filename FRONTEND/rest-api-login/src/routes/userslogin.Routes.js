const { Router } = require("express");
const userLoginRouter = Router();
const userLoginController =require('../controllers/userlogin.controller')

/**
 * ruta para obtener la lista de usuarios que han iniciado sesion
 */
 userLoginRouter.get("/usersLogin", userLoginController.usersLoginGet);

 /**
  * ruta para registrar los usuarios que inician sesion
  */
 userLoginRouter.post("/users/Login", userLoginController.createUserLogin);

 module.exports = userLoginRouter;