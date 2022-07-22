const { Router } = require("express");
const userRouter = Router();
const userController =require('../controllers/user.controller')

/**
 * ruta para obtener la sesion de usuario e ingrese a la app
 */
userRouter.get("/users/signin", userController.getUserSignIn);

/**
 * ruta para que el usuario se registre
 */
userRouter.get("/users/signup", userController.getUserSignUp);

/**
 * ruta para crear cerrar la sesion de usuario
 */
userRouter.post("/users/signup", userController.createUser);

/**
 * ruta para obtener una lista de usuarios
 */
userRouter.get("/users", userController.usersGet);


module.exports = userRouter;
