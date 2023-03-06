function listarAlunos(){

    // let alunos = [];
    fetch("http://localhost:8000/alunos")
        .then(res => res.json())
        .then(alunos => {
            let tabela = ducument.getElementeById("tabela-body");
            tabela.innerHTML = "";
            alunos.forEath ((aluno, key) => {
                tabela.innerHTML += `<tr>
                                        <td>${key}</td>
                                        <td>${aluno.nome}</td>
                                        <td>${aluno.email}</td>
                                        <td>${aluno.telefona}</td>
                                        <td>${aluno.cidade}</td>
                                        <th>
                                            <button class="btn btn-outline-warning">EDITAR</button>
                                            <button class="btn btn-outline-danger" onclick="deletarAluno(${key})">EXCLUIR</button>
                                        </th>
                                    </tr>`;
            } )
        })

}

let aluno = {
    nome: nome.value,
    email: email.value,
    telefone: telenone.value,
    cidade: cidade.value
}