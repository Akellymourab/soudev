let produto = {
    nome: "arroz",
    preco: 4.69,
    qnt: 3
}

let lista = [
   {
    nome: "arroz",
    preco: 4.69,
    qnt: 3
   },
   {
    nome: "cx. ovo",
    preco: 17.00,
    qtd:1
   }
];

for (let i = 0; i < lista.length; i++){
    document.write(lista[i].preco+"<br>")
}