const { Router } = require("express");
const userRouter = Router();
const userController =require('../controllers/user.controller')

userRouter.get("/users/signin", userController.getUserSignIn);

userRouter.get("/users/signup", userController.getUserSignUp);

userRouter.post("/users/signin", userController.postUserSignIn);

userRouter.post("/users/signup", userController.postSignUp);

/* userRouter.get("/user/:id", userController.userGet);

userRouter.get("/users", userController.usersGet);

userRouter.post("/createUser", userController.createUser);

userRouter.post("/authenticate", userController.userAuthenticate);
 
userRouter.put("/user/:id", userController.userPut);

userRouter.delete("/user/:id", userController.userDelete);  */


module.exports = userRouter;
