// POKEDEX projecto por Bernardo F Martinez Meave


function boton_buscar(){
    
    let pokename = document.getElementById("pokename");
    console.log(pokename.value);
    
    const loadPokemon = (id, cb) => {
        console.log('******** Fetch Pokemon API ***********************');
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            cb(data)
        });
    }
    
    loadPokemon(pokename.value,(pokemon) => {
        console.log(`Pokemon No.${pokemon.id} name is ${pokemon.name}`);
        let pokecard = document.getElementById("pokecard");
    /*Propiedad de JS para modificar contenido HTML, devuelve una cadena de texto */
        pokecard.innerHTML =    
        `<div class="card text-center">
            <img src="img/${pokemon.name}.jpeg" class="card-img-top" alt="Pokemon image">
            <div class="card-header text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
                ${pokemon.name}
            </div>
            <div class="card-body text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
              <p class="card-text">Id: ${pokemon.id}</p>
              <p class="card-text">Order: ${pokemon.order}</p>
              <p class="card-text">Weight: ${pokemon.weight}</p>
            </div>
        </div>`
    })    

    

}



