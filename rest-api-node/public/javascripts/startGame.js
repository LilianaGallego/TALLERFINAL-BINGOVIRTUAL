/**
 * Constante numero de filas
 */
const ROWS = 5;
/**
 * Constante numero de columnas
 */
const COLS = 5;

/**
 * Lista de letras a mostrar con el 
 * numero aleatorio
 */
const letters = ["B", "I", "N", "G", "O"]; 

/**
 * lista de numeros seleccionados al
 * dar click
 */
const deletedNumbers = new Array(76);

/**
 * Lista de numeros disponibles del 1 al 75
 */
var numbersAvail = []; 

/**
 * lista de numeros aleatorios
 */
var numbersRandom = [];

/**
 * lista de numeros aleatorios mostrados
 */
var showNumbers = [];

/**
 * Lista de reglas para ganar el bingo
 */
var winSets = [];

/**
 * Bandera booleana que controla el juego
 */
let startGame = true;  

var numbersBoard;

/**
 * variable para controlar el tiempo en el que
 * se muestran los numeros aleatorios
 */
let timer; 

/**
 * Se agrega el evento para que cargue la funcion 
 * init
 */
document.addEventListener("DOMContentLoaded", init);

/**
 * funcion que realizar el inicio del juego
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
function init() {
    for (let j = 0; j < 75; j++) {
        numbersAvail[j] = j + 1;
    }
    
    createBoard();

    numbersBoard = document.getElementsByTagName("td");
    
    enterNumbers();

    
    showNumber();
    
    startGame = false; 
   
    document.getElementById("results").addEventListener("click",
        () => {
            this.style.display = "none";
            document.getElementById("overlay").style.display = "none";
            if (!startGame) {
                timer = window.setInterval(nextNumber, 5000);
            }
        });
        
    timer = window.setInterval(nextNumber, 5000);
}

/**
 * funcion que adiciona a una lista las reglas para 
 * ganar el bingo
 * @param numbersRandom lista de numeros aleatorios
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const rulesWins = (numbersRandom) =>{
    
    for (let i = 0; i < 5; i++) {
        
        winSets.push(numbersRandom[i])
    }
    for (let i = 5; i < 10; i++) {
        winSets.push(numbersRandom[i])
    }
    for (let i = 10; i < 15; i++) {
        winSets.push(numbersRandom[i])
    }
    for (let i = 15; i < 20; i++) {
        winSets.push(numbersRandom[i])
    }
    for (let i = 20; i < 25; i++) {
        winSets.push(numbersRandom[i])
    }
    if(numbersRandom[0] && numbersRandom[4] && numbersRandom[20] && numbersRandom[24]){
        winSets.push(numbersRandom[0]);
        winSets.push(numbersRandom[4]);
        winSets.push(numbersRandom[20]);
        winSets.push(numbersRandom[24]);
    }

    if(numbersRandom[0] && numbersRandom[6] && numbersRandom[18] && numbersRandom[24]){
        winSets.push(numbersRandom[0]);
        winSets.push(numbersRandom[6]);
        winSets.push(numbersRandom[18]);
        winSets.push(numbersRandom[24]);
    }

    if(numbersRandom[4] && numbersRandom[8] && numbersRandom[16] && numbersRandom[20]){
        winSets.push(numbersRandom[0]);
        winSets.push(numbersRandom[6]);
        winSets.push(numbersRandom[18]);
        winSets.push(numbersRandom[24]);
    }

    if(numbersRandom[0] && numbersRandom[5] && numbersRandom[10] && numbersRandom[15]  && numbersRandom[20]){
        winSets.push(numbersRandom[0]);
        winSets.push(numbersRandom[5]);
        winSets.push(numbersRandom[10]);
        winSets.push(numbersRandom[15]);
        winSets.push(numbersRandom[20]);
    }
    
    if(numbersRandom[1] && numbersRandom[6] && numbersRandom[11] && numbersRandom[16]  && numbersRandom[21]){
        winSets.push(numbersRandom[1]);
        winSets.push(numbersRandom[6]);
        winSets.push(numbersRandom[11]);
        winSets.push(numbersRandom[16]);
        winSets.push(numbersRandom[21]);
    }

    if(numbersRandom[2] && numbersRandom[7] && numbersRandom[12] && numbersRandom[17]  && numbersRandom[22]){
        winSets.push(numbersRandom[2]);
        winSets.push(numbersRandom[7]);
        winSets.push(numbersRandom[12]);
        winSets.push(numbersRandom[17]);
        winSets.push(numbersRandom[22]);
    }

    if(numbersRandom[3] && numbersRandom[8] && numbersRandom[13] && numbersRandom[18]  && numbersRandom[23]){
        winSets.push(numbersRandom[3]);
        winSets.push(numbersRandom[8]);
        winSets.push(numbersRandom[13]);
        winSets.push(numbersRandom[18]);
        winSets.push(numbersRandom[23]);
    }

    if(numbersRandom[4] && numbersRandom[9] && numbersRandom[14] && numbersRandom[19]  && numbersRandom[24]){
        winSets.push(numbersRandom[4]);
        winSets.push(numbersRandom[9]);
        winSets.push(numbersRandom[14]);
        winSets.push(numbersRandom[19]);
        winSets.push(numbersRandom[24]);
    }
    
}

/**
 * funcion para obtener el siguiente numero aleatorio
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const nextNumber = () => {
        
    var index = Math.floor(Math.random() * numbersAvail.length);
    var num = numbersAvail[index];    
        
    document.getElementById("called").innerHTML 
            = letters[Math.floor((num-1)/15)] + " " + num;
    
    numbersAvail.splice(index, 1);

    showNumbers.push(num);

    document.getElementById("usedlist").innerHTML 
       = "Numeros mostrados:<br>" + showNumbers.valueOf();
       
    let str = "";
    for (let i = 0; i < numbersAvail.length; i++) {
        str += numbersAvail[i] + " ";
    }
    document.getElementById("past").innerHTML = str;
    
}

/**
 * funcion para crear el tablero del bingo
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const createBoard = () => {
    var board = document.getElementById("board");
    
    for (let row = 0; row < ROWS; row++) {
        var tr = document.createElement("tr");
        for (let col = 0; col < COLS; col++) {
            var td = document.createElement("td");
            td.className = "empty";
            
            if (col !== 2 || row !== 2) {
                td.addEventListener("click", clickCell);
            }
            tr.appendChild(td);  
        }
        board.appendChild(tr);
    }    
}

/**
 * funcion para capturar el click en la celda de la tabla
 * y cambiar de clase la celda de empty a picked
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
function clickCell() {
    
    if (!startGame) {
        
        if (this.className === "picked") {
            this.className = "empty";
            this.style.backgroundImage = "none";
            this.style.color = "blue"
            
        } else {
            this.className = "picked";
            this.style.backgroundColor = "green";
            this.style.color = "green";
        }
    }
}

/**
 * funcion para ingresar los numeros al tablero
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const  enterNumbers = () => {
    
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            var index = row * 5 + col;
            var cell = numbersBoard[index];
            
            if (index == 12) {
                cell.innerHTML = "FREE";
                cell.className = "picked cell22";
            } else {
                cell.innerHTML = randomNumber(col);
            }
            //rulesWins(cell);
        }
    }
}

/**
 * funcion para mostrar los numeros del tablero
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const showNumber = () => {

    let div = document.createElement("div");
    document.body.insertBefore(div, document.getElementsByTagName("footer")[0]);
    
    var elem = document.createElement("p");
    elem.appendChild(document.createTextNode(""));
    div.appendChild(elem);
    
    elem = document.createElement("p");
    elem.id = "past";
    var str = "";
    for (i = 0; i < numbersAvail.length; i++) {
        str += numbersAvail[i] + " ";
    }
    elem.appendChild(document.createTextNode(str));
    div.appendChild(elem);

    elem = document.createElement("p");
    elem.id = "usedlist";
    elem.innerHTML = "Numeros mostrados:<br>";
    div.appendChild(elem);
    
    elem = document.createElement("p");
    elem.id = "called";
    elem.appendChild(document.createTextNode(" "));
    div.append(elem);
    
    elem = document.createElement("button");
    
    elem.addEventListener("click", validation);
    
    elem.appendChild(document.createTextNode("GANE BINGO!"));
    div.appendChild(elem);  
   
}

/**
 * funcion validar que se cumplan las reglas para ganar el juego
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const validation = () => {
    
    window.clearInterval(timer);
       
    rulesWins(numbersRandom,deletedNumbers);
    validationNumbers(winSets);
    
    if (startGame == false) {
        document.getElementById("winner").innerHTML = 
                "Ganaste!";
    } else { 
        document.getElementById("winner").innerHTML =
                "Lo siento has perdido y quedas bloqueado!";
    }
    
    document.getElementById("results").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

/**
 * funcion para validar los numeros del tablero con las reglas 
 * del juego
 * @param winSets lista de reglas para ganar el bingo
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const validationNumbers = (winSets) =>{
    
    var equalNumbers = 0;
    
    for (i = 0; i < winSets.length; i++) {
        if (showNumbers.indexOf(winSets[i])){
            if(deletedNumbers.indexOf(showNumbers[i])){
                equalNumbers+=1;
                startGame = false;
            }
        }
    }

    if (equalNumbers === 0) {
                
        startGame = true;
    }
    
}

/**
 * funcion para obtener los numeros aleatorios
 * @param colNum numero de la columna del tablero del bingo
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const randomNumber = (colNum) => {
    var number;
    
    do {
        number = Math.floor(Math.random() * 15 + 1) + colNum * 15;
        if(!showNumbers.indexOf(number)){
            return number
        }
    } while (deletedNumbers[number]);
    deletedNumbers[number] = true;
    
    numbersRandom.push(number)
    return number;
}

