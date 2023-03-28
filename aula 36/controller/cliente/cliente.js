function cadastrar(){
    return "Cadastro de cliente"
}

function buscar(){
    return JSON.stringify([
        {
            id: 1,
            nome: 'maria'
        },
        {
            id: 2,
            nome: 'jose'
        }
    ]);
}

module.exports = {
    cadastrar, buscar
}