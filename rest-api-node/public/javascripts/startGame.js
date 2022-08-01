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
var winSets = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
  [0, 4, 12, 20, 24],
];

/**
 * Bandera booleana que controla el juego
 */
let startGame = true;

/**
 * Numeros del tablero deel usuario
 */
var numbersBoard;

/**
 * variable para controlar el tiempo en el que
 * se muestran los numeros aleatorios
 */
let timer;

/**
 * Identificador del usuario al realizar el login
 */
//var idLogin;

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

  validateUser();

  startGame = false;

  document.getElementById("results").addEventListener("click", () => {
    this.style.display = "none";
    document.getElementById("overlay").style.display = "none";
    if (!startGame) {
      timer = window.setInterval(nextNumber, 5000);
    }
  });

  timer = window.setInterval(nextNumber, 5000);
}

/**
 * funcion para obtener el siguiente numero aleatorio
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const nextNumber = () => {
  if (numbersAvail.length > 0) {
    var index = Math.floor(Math.random() * numbersAvail.length);
    var num = numbersAvail[index];

    document.getElementById("called").innerHTML =
      letters[Math.floor((num - 1) / 15)] + " " + num;

    numbersAvail.splice(index, 1);

    showNumbers.push(num);

    document.getElementById("usedlist").innerHTML =
      "Numeros mostrados:<br>" + showNumbers.valueOf();

    let str = "";
    for (let i = 0; i < numbersAvail.length; i++) {
      str += numbersAvail[i] + " ";
    }
    document.getElementById("past").innerHTML = str;
  } else {
    document.getElementById("called").innerHTML = "FIN";
  }
};

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
};

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
      this.style.color = "blue";
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
const enterNumbers = () => {
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
    }
  }
};

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

  elem = document.createElement("div");
  elem.id = "called";
  elem.appendChild(document.createTextNode(" "));
  div.append(elem);

  elem = document.createElement("button");
  elem.clasName = "btn btn-danger";
  elem.addEventListener("click", validation);
  elem.appendChild(document.createTextNode("GANE BINGO!"));
  div.appendChild(elem);
};

/**
 * funcion para validar que se cumplan las reglas
 * para ganar el juego
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const validation = () => {
  window.clearInterval(timer);

  winSets.forEach(validationNumbers);

  if (startGame == true) {
    alert("Ganaste!");
    document.getElementById("end").style.backgroundImage =
      "url(images/premio.jpg)";
  } else {
    document.getElementById("winner").innerHTML =
      "Lo siento has perdido y quedas bloqueado!";
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("overlay").style.display = "block";
};

/**
 * funcion para validar los numeros del tablero con las reglas
 * del juego
 * @param currentElement elemento a validar
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const validationNumbers = (currentElement) => {
  var equalNumbers = 0;

  for (i = 0; i < currentElement.length; i++) {
    var thisNumber = numbersBoard[currentElement[i]];

    if (
      thisNumber.innerHTML === "FREE" ||
      (thisNumber.className === "picked" &&
        showNumbers.indexOf(thisNumber.inner))
    ) {
      equalNumbers++;
    }
  }
  if (equalNumbers === 5) {
    for (i = 0; i < currentElement.length; i++) {
      numbersBoard[currentElement[i]].style.backgroundImage =
        "url(images/premio.jpg)";
    }
    startGame = true;
  }
};

/**
 * funcion para obtener los numeros aleatorios
 * @param colNum numero de la columna del tablero del bingo
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const randomNumber = (colNum) => {
  let number;

  do {
    number = Math.floor(Math.random() * 15 + 1) + colNum * 15;
    if (!showNumbers.indexOf(number)) {
      return number;
    }
  } while (deletedNumbers[number]);
  deletedNumbers[number] = true;
  numbersRandom.push(number);
  return number;
};

/**
 * funcion para agregar el id del usuario que esta en el
 * juego
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const validateUser = async () => {
  await fetch("http://localhost:3000/api/v1/usersLobby")
    .then((response) => response.json())
    .then((data) => {
      try {
        let idLogin;
        for (let i = 0; i < data.length; i++) {
          if (i == data.length - 1) {
            idLogin = data[i]._id;
            console.log(idLogin);
          }
        }
        addUserMySql(idLogin);
      } catch (error) {
        console.log(error);
      }
    });
};

/**
 * funcion para añadir un usuario
 * a la bd de MySQL
 * @param  idLogin identificador del login del usuario
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const addUserMySql = (idLogin) => {
  ///searchUser(idLogin);
  fetch("http://localhost:9090/api/v1/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idLogin }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((data) => {
      console.log(data);
      let user = data.data;
      console.log("imprime al crear");
      sendBoard(user, idLogin);
    });
};

/**
 * funcion para obtener los datos del tablero que se van a enviar
 * a la base de datos
 *
 * @param  user usuario dueño del carton
 * @param  id id del usuario al realizar el login
 *
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const sendBoard = (user) => {
  fetch("http://localhost:9090/api/v1/board", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((data) => {
      let board = data.data;
      sendNumbersBoard(board);
    });
};

/**
 * funcion para enviar los numeros del tablero a la bd
 * @param  board tablero que contiene la lista de numeros
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const sendNumbersBoard = (board) => {
  console.log("recibe el tablero");
  for (let i = 0; i < numbersRandom.length; i++) {
    let number = numbersRandom[i];
    console.log(number);
    fetch("http://localhost:9090/api/v1/numberB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ board, number }),
    });
  }
};

/**
 * funcion para eliminar un usuario de la bd
 * @param  id identificador del usuario a eliminar
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
const deleteUser = async (id) => {
  await fetch(`http://localhost:9090/api/v1/user/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
