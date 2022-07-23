/**
 * Variable que captura el correo electronico del usuario
 */
const inputUsername = document.querySelector("#username");
/**
 * Variable que captura la contraseña del usuario
 */
const inputPassword = document.querySelector("#password");
/**
 * boton para realizar el inicio de sesion
 */
const btnLogin = document.querySelector("#btnLogin");

/**
 * Se agrega el evento click al boton iniciar sesion
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (inputUsername.value == "" && inputPassword.value == " "){
        console.log("Debe ingresar correo y contraseña para ingresar")
      }
      
      for (let i = 0; i < data.length; i++) {
        const username = data[i].username;
        const password = data[i].password;
        const _id = data[i]._id;
        if (username == inputUsername.value && password == inputPassword.value) {
          fetch("http://localhost:3000/api/v1/users/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({_id, username, password }),
          });

          location.href="http://localhost:8080/api/v1/"
        } else {
          console.log("Usuario no encontrado");
        }
      }
      
     })
    .catch((error) => console.log(error));
}); 
