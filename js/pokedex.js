// POKEDEX projecto por Bernardo F Martinez Meave

console.log('******** Fetch Pokemon API ***********************')

const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data)
    })   
}

loadPokemon(1,(pokemon) => {
    console.log(`Pokemon No.${pokemon.id} name is ${pokemon.name}`);
})