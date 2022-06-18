const req = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(poke => poke.json()).then(data => console.log(data))
