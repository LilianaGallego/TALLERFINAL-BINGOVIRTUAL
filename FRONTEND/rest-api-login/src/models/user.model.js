const mongoose = require("mongoose");
const uuid = require("uuid");

/**
 * Esquema de un usuario
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const saltRounds = 10;
UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => {
      return uuid.v4();
    },
  },
  username: {
    type: String,
    required: [true, "El correo es requerido"],
    minlength: [3, "El correo debe contener mas de  3 letras"],
    maxlength: [50, "El correo debe tener menos de 50 letras"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
    minlength: [3, "La contraseña debe contener mas de  3 caracteres"],
    maxlength: [50, "La contraseña debe tener menos de 50 caracteres"],
    trim: true,
  },
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
