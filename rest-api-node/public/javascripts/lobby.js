/**
 * boton para iniciar el juego
 */
const btnStart = document.getElementById('btnStart')

let segundos = 3;
/**
 * funcion que realiza el conteo regresivo del tiempo de
 * espera en el lobby
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
counting = () => {
  document.getElementById('number').innerHTML ="El juego inicia en: " + segundos + " segundos";
  if (segundos == 0){
    document.getElementById('mss').innerHTML ="Dar click en JUGAR";
    btnStart.style  = 'display:block';
    btnStart.addEventListener('click', (e) => {
      startGame();
      
    })
  }else{
    segundos--;
    btnStart.disabled = true;
    setTimeout("counting()",1000)
  }
  
}

/**
 * funcion para dirigirse a la pagina donde inicia el juego
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
startGame = () => {
  self.location.href = 'http://localhost:8080/api/v1/users/startGame';
  
}

/**
 * funcion para mostrar la lista de usuarios que estan en 
 * el lobby con su id y correo electronico
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const userList = async () => {

  let body = "";
    // Petición HTTP
  await fetch("http://localhost:3000/api/v1/usersLobby")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
      

        let id = data[i]._id;
        let username = data[i].username;
        console.log(id);
        addUserMySql(id);
        body += `<tr  >
                  <td>${id}</td>
                  <td>${username}</td>

                </tr>`; 
      }      
    });
    document.getElementById("tbody").innerHTML = body;
}


/**
 * funcion para agregar el id del usuario que esta en el
 * juego
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const addUserMySql = (id) => {
  fetch("http://localhost:9090/api/v1/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id}),
  });
}

counting();
userList();

