let body = "";
createTable =() =>{
    for (let i = 0; i < 16; i++) {
        
        body += `<tr>
                      <td>${i}</td>
                                  
                  </tr>`;
      }
      document.getElementById("tbody").innerHTML = body;
};
