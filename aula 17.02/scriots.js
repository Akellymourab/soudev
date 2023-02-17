//  let item1 = "ovos"; 
//  let item2 = "uvas";
//  let items = ["ovos" , "uvas"]


let produtos = [];

function adicionarItem(){
    let produto = {
        nome: nome.value,
        preco: preco.value,
        qtd: qtd.vaule
    };

    produtos.push(item.value); 
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listarItems();
};
function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if (items && items.length > 0){
        for (let i = 0; i < produtos.length; i++){
            lista.innerHTML += `<li class="list-group-item"> ${produtos[i]} </li>`;
        }
        localStorage.setItem("produtos", JSON.stringify(produtos))   
    }     
}