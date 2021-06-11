let nomeDoPokemon = document.getElementById('nomeDoPokemon');
let numeroDaPokedex = document.getElementById('numeroDaPokedex');
let imagemDoPokemon = document.getElementById('imagemDoPokemon');

let pokemonIndex = 1
let indiceMaximoDePokemon = 898

function buscarPokemon() {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonIndex)
        .then(function (retornoDaApi) {
            let pokemon = retornoDaApi.data;

            nomeDoPokemon.innerText = pokemon.name;
            numeroDaPokedex.innerText = '#' + pokemon.id;
            imagemDoPokemon.setAttribute('src', pokemon.sprites.front_default);
            imagemDoPokemon.setAttribute('alt', pokemon.name);
        })
}

function buscarProximoPokemon() {
    if (pokemonIndex < indiceMaximoDePokemon) {
        pokemonIndex = pokemonIndex + 1;
        buscarPokemon();
    }
}

function buscarAnteriorPokemon() {
    if (pokemonIndex > 1) {
        pokemonIndex = pokemonIndex - 1;
        buscarPokemon();
    }
}

function buscarPokemonAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * indiceMaximoDePokemon + 1);
    pokemonIndex = numeroAleatorio;
    buscarPokemon();
}

window.onload = buscarPokemonAleatorio()