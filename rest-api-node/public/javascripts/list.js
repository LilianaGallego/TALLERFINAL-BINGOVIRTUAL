/**
 * funcion para listar los usuarios que estan jugando
 * juego
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
 const listUser = async() => {
    await fetch("http://localhost:9090/api/v1/users")
      .then(response => response.json())
      .then(data => {
        let users = data.data;
        let body = " ";
        for (let i = 0; i < users.length; i++) {
      
            let id = users[i].id;
            let idLogin = users[i].idLogin;
            console.log(id);
            body += `<tr  >
                      <td id="titletbl">${id}</td>
                      <td id="titletbl">${idLogin}</td>
    
                    </tr>`; 
          }      
        
        document.getElementById("tbusers").innerHTML = body;
  })
}

listUser();