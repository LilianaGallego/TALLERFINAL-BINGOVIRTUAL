const mongoose = require("mongoose");
//const User = require("../models/user.model");

/**
 * Esquema de un usuario en login
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */

 UserLoginSchema = new mongoose.Schema({
   _id: {
     type: String,
     required: true,
    
   },
   username: {
     type: String,
     trim: true,
   },
   password: {
     type: String,
     trim: true,
   },
 });
 

 module.exports = mongoose.model("UserLogin", UserLoginSchema);
 