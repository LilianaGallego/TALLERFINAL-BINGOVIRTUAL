const User = require("../models/user.model");

/**
 * Para obtener sesion de usuario
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
exports.getUserSignIn = async (req, res) => {
  res.render('index.hbs')
}

/**
 * Para cerrar  sesion de usuario
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
exports.getUserSignUp = async (req, res) => {
  res.render('register')
}

/**
 * Para crear la sesion de usuario con su usuario y contraseña
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
exports.postUserSignUp = async (req, res) => {
  const {username, password} = req.body;
  const errors = [];
  if(username.length <= 0){
    error.push({text: 'Por favor ingrese su correo'})
  }
  if(password.length <= 0){
    error.push({text: 'Por favor ingrese su contraseña'})
  }
  if(password.length < 3 ){
    error.push({text: 'la contraseña debe tener mas de 3 caracteres'});
  }
  if(errors.length > 0) {
    res.render('users/signup',{error, username, password});
  }else{
    const newUser = new User({username, password}); 
    await newUser.save();
    req.flash('success_msg', 'Usuario creado correctamente');
    res.redirect('/users/signin')
  }
}
/* 
exports.userGet = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.usersGet = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (User) {
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(200).json({ msj: "USUARIO REGISTRADO", id: newUser._id });
    } else {
      res.json({ isOk: false, msj: "Los datos son requeridos" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userAuthenticate = async (req, res) => {
  try {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
      if (err) {
        res.status(500).send("ERROR AL AUTENTICAR EL USUARIO");
        
      } else if (!user) {
        res.status(500).send("EL USUARIO NO EXISTE");
      } else {
        /* user.isCorrectPassword(password, (err, result) => {
          if (err) {
            res.status(500).send("ERROR AL AUTENTICAR");
          } else if (result) {
            res.status(200).send("USUARIO AUTENTICADO CORRECTAMENTE");
          } else {
            res.status(500).send("USUARIO Y/O CONTRASEÑA INCORRECTA");

          }
        }); 
         res.status(200).send("USUARIO AUTENTICADO CORRECTAMENTE");
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userPut = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(id);
    if (id && data) {
      await User.findByIdAndUpdate(id, data);
      res.json({ msj: "registro actualizado" });
    } else {
      res.json({ msj: "Datos insuficientes" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({
      msj: "El registro del usuario se elimino correctamente",
      isOk: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
 */