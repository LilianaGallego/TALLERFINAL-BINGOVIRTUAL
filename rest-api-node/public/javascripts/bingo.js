let listb = [];
let listi = [];
let listn = [];
let listg = [];
let listo = [];

const createBingo = () => {
    let body = "";
    


    for (let i = 1; i <= 75; i++) {
        if (i == 1 && i <= 15){
            listb.push(i);
        }
        if (i == 16 && i <= 30){
            listi.push(i);
        }
        if (i == 31 && i <= 45){
            listn.push(i);
        }
        if (i == 46 && i <= 60){
            listg.push(i);
        }
        if (i == 61 && i <= 75){
            listo.push(i);
        }
        
        
    }
    fetch("http://localhost:9090/api/v1/bingo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({listb, listi, listn,listg, listo}),
    })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((data) => {
      const message = "bingo creado";
    });
}
createBingo();