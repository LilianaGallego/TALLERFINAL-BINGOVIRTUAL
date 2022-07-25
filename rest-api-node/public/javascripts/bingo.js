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
      document.getElementById("tbody").innerHTML = body;   
    });
    
}
const createBoard = (rows, columns) =>{
  var boardB = document.getElementById('boardB');
  var boardI = document.getElementById('boardI');
  var boardN = document.getElementById('boardN');
  var boardG = document.getElementById('boardG');
  var boardO = document.getElementById('boardO');

  var valuesb = generateNumbers(1, 15);
  var valuesi = generateNumbers(16, 30);
  var valuesn = generateNumbers(31, 45);
  var valuesg = generateNumbers(46, 60);
  var valueso = generateNumbers(61, 75);

  var numbersB = enterNumbers(valuesb, 5, 1);
  var numbersI = enterNumbers(valuesi, 5, 1);
  var numbersN = enterNumbers(valuesn, 5, 1);
  var numbersG = enterNumbers(valuesg, 5, 1);
  var numbersO = enterNumbers(valueso, 5, 1);

  tableN = freeCell (numbersN,3,1);
  showBoard(numbersB, boardB,5, 1);
  showBoard(numbersI, boardI,5, 1);
  showBoard(tableN,  boardN,5, 1);
  showBoard( numbersG, boardG,5, 1);
  showBoard( numbersO, boardO,5, 1);


}

const generateNumbers = (since, until) => {
  
  var numbers = [];
  for (var i = since; i <= until; i++) {
      numbers.push(i);
  }
  return numbers;

}

const enterNumbers = (numbers, rows, columns) =>{
  var table = [];
  for (var i = 0; i < rows; i ++) {
    var row = [];
      for (var j = 0; j < columns; j++) {
        var number = 0;
          [number, numbers] = selectNumber(numbers);
          row.push(number);
      }
      table.push(row);
  }
  return table;
}

const selectNumber = (numbers) =>{
  var index = Math.round(Math.random() * (numbers.length - 1));
  var number = numbers[index];
  numbers.splice(index,1);
  return [number, numbers];
}

const freeCell = (table, rows, columns) => {
  var cell = 1;
  var cover = [];
  var values = generateNumbers (0, columns - 1);
  for (var i = 0; i < rows; i++) {
      var coverRow = [];
      if (i < rows - 1) {
          for (var j = 0; j < cell; j++) {
            if(i == 3){
              var row = 0;
            }

              coverRow.push(row);
          }
      } else {
          coverRow.push(values[0]);
          values = generateNumbers(0, columns - 1);
          for (var j = 0; j < cell - 1; j++) {
              var row = 0;
              
              coverRow.push(row);
          }
      }
      cover.push(coverRow);
  }
  for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cell; j++) {
          table[i][cover[i][j]] = 0;
      }
  }
  return table;
}

const showBoard = (table, board, rows, columns) =>{
  var tableHtml = '<table id="tbl-board">';
  for (var i = 0; i < rows; i++) {
      tableHtml += '<tr>';
      for (var j = 0; j < columns; j++) {
          var id = 'row' + i + 'col' + j;
          
          table[i][j] == 0 ? tableHtml += '<td style="background: black;">' : tableHtml += '<td class="active" id="' + id + '" style="cursor: pointer;">';
          tableHtml += table[i][j];
         
          table[i][j] == 0 ? tableHtml += '</td>' : tableHtml += '</td>';
      }
      tableHtml += '</tr>';
  }
  tableHtml += '</table>';
  board.innerHTML = tableHtml;
}

const numbers = document.querySelectorAll('td.active')
console.log(numbers);
const row0 = [];
const row1 = [];
const row2 = [];
const row3 = [];
const row4 = [];
numbers.forEach(function(element) {
    element.onclick = function (e) {
        e.preventDefault();
        var cell = this.getAttribute('id');
        var row = parseInt(cell.substring(4,5));
        switch (row) {
            case 0:
                if (row0.includes(cell)) {
                    row0.splice(row0.indexOf(cell),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    row0.push(cell);
                    this.setAttribute('style', 'background: lightblue; cursor: pointer;');
                }
                break;
            case 1:
                if (row1.includes(cell)) {
                    row1.splice(row1.indexOf(cell),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    row1.push(cell);
                    this.setAttribute('style', 'background: lightblue; cursor: pointer;');
                }
                break;
            case 2:
                if (row2.includes(cell)) {
                    row2.splice(row2.indexOf(cell),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    row2.push(cell);
                    this.setAttribute('style', 'background: lightblue; cursor: pointer;');
                }
                break;
            case 3:
                if (row3.includes(cell)) {
                    row3.splice(row3.indexOf(cell),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    row3.push(cell);
                    this.setAttribute('style', 'background: lightblue; cursor: pointer;');
                }
                break;
            case 4:
                if (row4.includes(cell)) {
                    row4.splice(row4.indexOf(cell),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    row4.push(cell);
                    this.setAttribute('style', 'background: lightblue; cursor: pointer;');
                }
                break;
            default:
        }
        if(row0.length == 5 || row1.length == 5 || row2.length == 4 || row0.length == 5 || row1.length == 5) {
            console.log('BINGO');
            window.alert('Usted ha ganado!!!');
        }
        
    }
});


getBingo();
createBoard(5,5);
//createBingoBoard();
//saveBingo(numB, numI, numN, numG, numO); 