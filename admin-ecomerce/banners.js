fetch ('http://localhost:8000/banners')
    .then(res => res.json())
    .then(dados =>{
        dados.map(cada => {
            tabela_banners.innerHTML = `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.titulo}</td>
            </tr>
        `;
        })
    });