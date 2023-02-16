//  let item1 = "ovos"; 
//  let item2 = "uvas";
//  let items = ["ovos" , "uvas"]


let produtos = [];

function adicionarItem(){
    produtos.push(item.value); 
    lista.innerHTML = "";

    for (let i = 0; i < produtos.length; i++){
        lista.innerHTML += `<li class="list-group-item"> ${produtos[i]} </li>`;
    }
    localStorage.setItem("produtos", JSON.stringify(produtos))    
}