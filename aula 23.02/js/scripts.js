function posterior(){
    let itemAtivo = document.querySelector(".active");
    let posicaoAtiva = itemAtivo.getAttribute("posicao");

    let todosItems = document.querySelectorAll(li);
    for (let i = 0; i < todosItems.length; i++){
        if(todosItems[i].getAttribute("posicao") == posicaoAtiva + 1){
            todosItems[i].classList.add("active")            
        }else{
            todosItems[i].class.remove("active")
        }
    }
}