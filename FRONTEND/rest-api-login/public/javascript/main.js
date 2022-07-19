var username = document.querySelector("#username").value;
var password = document.querySelector("#password").value;
const btnRegister = document.querySelector("#btnRegister");
const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.username);
        if( data.username == username && data.password == password){
            fetch("http://localhost:3000/api/v1/users/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
        }else{
            console.log('Usuario no encontrado')
        }
   /*  fetch("/api/v1/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }); */
    });
  });
  
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    console.log(username);
    fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  });
  

