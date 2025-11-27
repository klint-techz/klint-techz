document.getElementById("calcBtn").addEventListener("click",function(){
let jamb = Number(document.getElementById('utmeScore').value)
let grade1 = Number(document.getElementById('g1').value)
let grade2 = Number(document.getElementById('g2').value)
let grade3 = Number(document.getElementById('g3').value)
let grade4 = Number(document.getElementById('g4').value)

let sitting = Number(document.getElementById('sitting').value)


let olevelSum = grade1 + grade2 + grade3 +grade4;
if(sitting == "1"){
    olevelSum += 40;
} 

let jambScore = jamb * 0.9
let olevelScore = olevelSum * 0.1

let totalAggregate = jambScore + olevelScore;

document.getElementById("result").textContent =`your Aggregate is ${totalAggregate.toFixed(2)}`
});