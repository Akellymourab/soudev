let d = 1;

while (d <= 31){
    dia.innerHTML += "<option>" + d + "</option"

    d++
}

let m = 0;
let messes = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

while (m < 12){
    mes.innerHTML += "<option>" + messes[m] + "</option"
    
    m++
}

let a = 2023;

while (a >= 1950){
    ano.innerHTML += "<option>" + a + "</option"

    a--
}
