const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const btnRegister = document.querySelector("#btnRegister");

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