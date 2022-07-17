const btnStart = document.getElementById('btnStart')
//const start = document.getElementById('start').style = 'display:none';

let segundos = 3;
conteo = () => {
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
    setTimeout("conteo()",1000)
  }
  
}
conteo();

startGame = () => {
  self.location.href = './startGame.html';
}


