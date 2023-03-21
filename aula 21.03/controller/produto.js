function cadastrar(){
    return "Cadastro de Produto";
}

function buscar(){
    return JSON.stringify([
        {
            id: 1,
            nome: 'saia'
        },
        {
            id: 2,
            nome: 'bone'
        }
    ]);
}

module.exports = {
    cadastrar, buscar
}