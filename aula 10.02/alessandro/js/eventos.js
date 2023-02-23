
function alterarNome () {
    nome.classList.remove("is-invalid");
    if (nome.value.length > 2){
        nome.classList.add("is-valid")
    }
}
function alterarEmail () {
    email.classList.remove("is-invalid");
}
function alterarTelefone () {
    telefone.classList.remove("is-invalid");
}
function alterarEndereco () {
    endereco.classList.remove("is-invalid");
}


function validar() {
    event.preventDefault();

    // alert("foi....");

    if( document.getElementById("nome").value ===""){
        // if( "nome".value ===""){
        // alert("nome invalido");
        // nome.style.borderColor = "red";
        nome.classList.add("is-invalid");
    
    }
    if( document.getElementById("email").value ===""){
        // alert("E-mail invalido");
        // email.style.borderColor = "red";
        email.classList.add("is-invalid");
    }
    if( document.getElementById("telefone").value ===""){
        // alert("telefone invalido");
        // telefone.style.borderColor = "red";
        telefone.classList.add("is-invalid");
    }
    if( document.getElementById("endereco").value ===""){
        // alert("endereço invalido");
        // endereco.style.borderColor = "red";
        endereco.classList.add("is-invalid");
    }
    
   
}