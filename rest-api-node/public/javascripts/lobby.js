const btnStart = document.getElementById('btnStart')

let segundos = 3;
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
counting();

startGame = () => {
  self.location.href = './startGame.html';
}

const userList = () =>{
  fetch("http://localhost:3000/api/v1/usersLogin")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data)
    })
    .catch((error) => console.log(error));

}

