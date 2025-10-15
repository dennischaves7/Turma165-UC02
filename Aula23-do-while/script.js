// let huan = 1.10;
// let chico = 1.50;
// let ano = 0;

// do {
//     huan = huan + 0.02
//     chico = chico + 0.03
//     ano++
    
// } while (huan > chico );

// console.log(ano)
function for01() {
    let result = ""
    for(let i = 0; i < 500; i++){
      result += i
    }
    document.getElementById("result").textContent = result
}
 
function for02() {
    let result2 = '';
    for (let i = 0; i <= 20; i += 2) {
        result2 += i + ","
    }
    document.getElementById("result2").textContent = result2
}
