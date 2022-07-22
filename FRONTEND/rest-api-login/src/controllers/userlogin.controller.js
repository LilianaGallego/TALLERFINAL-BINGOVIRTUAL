const UserLogin = require("../models/userlogin.Model");

/**
 * Metodo asincrono para obtener una lista de usuarios que
 * han iniciado sesion
 *
 * @param req solicitud enviada
 * @param res respuesta obtenida
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
 exports.usersLoginGet = async (req, res) => {
    try {
      const usersLogin = await UserLogin.find();
      res.json(usersLogin);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  /**
 * Metodo que crea los usuarios que inician sesion
 *
 * @param req solicitud enviada
 * @param res respuesta obtenida
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
exports.createUserLogin = async (req, res) => {
    try {
      const { _id, username, password } = req.body;
      if (UserLogin) {
        const newUserLogin = new UserLogin({_id, username, password });
        await newUserLogin.save();
        res.status(200).json({ msj: "USUARIO REGISTRADO EN EL LOGIN" });
        
      } else {
        res.json({ isOk: false, msj: "Los datos son requeridos" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };