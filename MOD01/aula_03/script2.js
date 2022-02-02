var prompt = require("prompt-sync")();

const resp = prompt("digite um numero entre 1 e 365: ");

if(resp < 1){
    console.log("inválido")    
}else if(resp <= 31){
    console.log("Janeiro")    
}else if(resp <= 59){
    console.log("fevereiro")
}else if(resp <= 90){
    console.log("março")
}else if(resp <= 120){
    console.log("abril")
}else if(resp <= 151){
    console.log("maio")
}else if(resp <= 181){
    console.log("junho")
}else if(resp <= 212){
    console.log("julho")
}else if(resp <= 243){
    console.log("agosto")
}else if(resp <= 273){
    console.log("setembro")
}else if(resp <= 304){
    console.log("outubro")
}else if(resp <= 334){
    console.log("novembro")
}else if(resp <= 365){
    console.log("dezembro")
}else{
    console.log("inválido")
}
