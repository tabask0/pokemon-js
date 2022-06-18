const button = document.getElementById('button');
button.addEventListener('click', getPokemon);

const input = document.getElementById('input');



function getPokemon(){
    let inputValue = input.value;
    const req = fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(pokemon => pokemon.json()).then(data => {return data});

        console.log(req);
}


