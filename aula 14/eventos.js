// let idade = prompt("ola, qual a sua idade?");

// alert("que legal, voce tem " + idade);
// if (idade < 14) {
//     alert("voce é criança.");
// } else if ( idade < 18) {
//     alert("voce é adolescente.");
// } else if ( idade < 60) {
//         alert("voce é adulto");
// } else {
//     alert("voce é idoso")
// }


// let ladoA = prompt ("qual o lado A?");
// let ladoB = prompt ("qual o lado B?");
// let ladoC = prompt ("qual o lado C?");
 
// if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA){
//     alert("triangulo equilatero!");
// } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
//     alert("triangulo escaleno");
// } else {
//     alert("triangulo isorceles!");
// }   



function calcularIMC(){
    event.preventDefault();
    let mPeso = Number(peso.value);
    let mAltura = Number (altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1);
    
    if(mPeso == 0){
        alert ("peso invalido");
        return;
    }
    if(mAltura == 0){
        alert ("altura invalida");
        return;
    }

if(imc <= 18.5){
    alert("abaixo do peso: "+ imc);
}else if (imc > 18.5 && imc <= 24.9){
    alert("peso medio: "+ imc);
}else if (imc > 24.9 && imc <= 29.9){
    alert("acima do peso: "+ imc);
}else if (imc > 29.9 && imc <= 34.9){
    alert("obesidade 1: "+ imc);
}else if (imc > 34.9 && imc <= 39.9){
    alert("obesidade 2: "+ imc);
}else {
    alert("obesidade 3: "+ imc)
}
}