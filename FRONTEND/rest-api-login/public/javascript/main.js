const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const btnLogin = document.querySelector("#btnLogin");

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
          /* fetch("http://localhost:3000/api/v1/users/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({_id, username, password }),
          }); */

          location.href="http://localhost:8080/api/v1/"
        } else {
          console.log("Usuario no encontrado");
        }
      }
      
      /*  fetch("/api/v1/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }); */
    })
    .catch((error) => console.log(error));
}); 
