
/**
 * funcion para obtener la lista de los numeros del tablero general
 * 
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const getBingo = async() => {
    let body = "";
    // Petición HTTP
  await fetch("http://localhost:9090/api/v1/listBingo")
    .then(response => response.json())
    .then(json => {
      console.log(json.data)
      let data = json.data
        
      for (let i = 0; i < data.length; i++) {
      
        let listb = data[i].listb;
        let listi = data[i].listi;
        let listn = data[i].listn;
        let listg = data[i].listg;
        let listo = data[i].listo;

        body += `<tr>
                  <td>${listb}</td>
                  <td>${listi}</td>
                  <td>${listn}</td>
                  <td>${listg}</td>
                  <td>${listo}</td>
                </tr>`; 
      }   
      document.getElementById("tbingo").innerHTML = body;   
    });
    
}

getBingo();
