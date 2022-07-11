const { Router } = require("express");
const userRouter = Router();
const userController =require('../controllers/user.controller')

/**
 * ruta para obtener la sesion de usuario
 */
userRouter.get("/users/signin", userController.getUserSignIn);

/**
 * ruta para obtener cerrar sesion de usuario
 */
userRouter.get("/users/signup", userController.getUserSignUp);

/**
 * ruta para crear la sesion de usuario
 */
userRouter.post("/users/signin", userController.postUserSignIn);
/**
 * ruta para crear cerrar la sesion de usuario
 */
userRouter.post("/users/signup", userController.postSignUp);

/* userRouter.get("/user/:id", userController.userGet);

userRouter.get("/users", userController.usersGet);

userRouter.post("/createUser", userController.createUser);

userRouter.post("/authenticate", userController.userAuthenticate);
 
userRouter.put("/user/:id", userController.userPut);

userRouter.delete("/user/:id", userController.userDelete);  */


module.exports = userRouter;
