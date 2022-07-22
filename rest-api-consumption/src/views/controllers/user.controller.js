const User = require("../models/user.model");

/**
 * Para ingresar al lobby
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
 exports.getUserLobby = async (req, res) => {
  res.render('lobby')
}

