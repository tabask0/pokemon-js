const button = document.getElementById('button');
button.addEventListener('click', getPokemon);

const input = document.getElementById('input');
const pokemonImg = document.getElementById('pokemonImg');
const pokemonContainer = document.getElementById('pokemonContainer');



function getPokemon(){
    let inputValue = input.value;
    const req = fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(pokemon => pokemon.json()).then(data => showPokemon(data));

        console.log(req);
}


function showPokemon(data){
    pokemonContainer.classList.remove("invisible");
    pokemonImg.setAttribute('src',data.sprites.other["official-artwork"].front_default);
    document.getElementById('pokemonHp').innerHTML = `HP: ${data.stats[0].base_stat}`;
    document.getElementById('pokemonAttack').innerHTML = `Attack: ${data.stats[1].base_stat}`;
    document.getElementById('pokemonDefence').innerHTML = `Defense: ${data.stats[2].base_stat}`;
    document.getElementById('pokemonSpeed').innerHTML = `Speed: ${data.stats[5].base_stat}`;
    document.getElementById('pokemonName').innerHTML = upperName(data.species.name);


}


function upperName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
};
