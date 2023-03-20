const users = [
    'usoario1',
    'usoario2',
    'usoario3'
];

function creatUser(){
    console.log("usoario criado")
}
function updateUser(){
    console.log("usoario atualizado")
}
function listUser(){
    console.log("lista de usorio")
}
function deleteUser(){
    console.log("usoario deletado")
}

module.exports = {
    users,
    creatUser,
    updateUser,
    listUser,
    deleteUser
    
};