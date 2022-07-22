const { Router } = require("express");
const userRouter = Router();
const userController =require('../controllers/user.controller')

/**
 * ruta para ingresar al lobby
 */
userRouter.get("/lobby", userController.getUserLobby);


module.exports = userRouter;
