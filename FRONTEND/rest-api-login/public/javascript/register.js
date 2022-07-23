/**
 * Variable que captura el correo electronico del usuario
 */
 const inputUsername = document.querySelector("#username");
 /**
  * Variable que captura la contraseña del usuario
  */
const inputPassword = document.querySelector("#password");
/**
 * boton para crear el contacto en la bd y crear la sesion
 */
const btnRegister = document.querySelector("#btnRegister");

/**
 * Se agrega el evento click al boton registro del usuario 
 * en la bd
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const username = inputUsername.value;
  const password =inputPassword.value;
  if (username == "" && password == ""){
    console.log("Debe ingresar correo y contraseña para registrarlo")
  }else{
  
    fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log(username);
    location.href="http://localhost:3000/api/v1/users/signin"
  }
});