fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(lista => {
    lista.results.forEach(cada => {
        pokemons.innerHTML += `<option value="${cada.url}">${cada.name}</option>`;
    });
})

function buscarPokemon(){
    fetch(pokemons.value)
    .then(res => res.json())
    .then(pokemon =>{
        document.querySelector(".pokemon").innerHTML = `<img src="${pokemon.sprites.front_default}">`;
    })
}