const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/user.model");

/**
 * crea el login de la api con el nombre de usuario y contraseña
 * @return retorna null si no se encuentra el usuario
 * @return retorna el usuario y verifica la contraseña
 * @return retorna false si la contraseña no es valida
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password,done) =>{
    const user = await User.findOne({email: email});
    if (!user){
        return done(null, false, {message: 'Usuario no encontrado'});
    }else{
        const match = await User.matchPassword(password);
        if (match){
            return done(null, user);
        }else{
            return done(null, false, {message: 'Contraseña no valida'});
        }
    }
}));

/**
 * utilizado para serializar al usuario para la sesión
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
passport.serializeUser((user,done) =>{
    done(null, user.id);
});

/**
 * utilizado para deserializar al usuario para la sesión
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
passport.deserializeUser((id,done) =>{
    User.findById(id,(err,user) =>{
        done(err, user);
    })
});
