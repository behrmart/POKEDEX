// POKEDEX projecto por Bernardo F Martinez Meave


function boton_buscar(){
    
    let pokename = document.getElementById("pokename");
    console.log(pokename.value);
    
    const loadPokemon = (id, cb) => {
        console.log('******** Fetch and parse Pokemon API ***********************');
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            cb(data)
        });
    }

    const loadPokemonAbility = (id, cb) => {
        console.log('******** Fetch and parse Pokemon Abilities API ***********************');
        fetch(`https://pokeapi.co/api/v2/ability/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            cb(data)
        });
    }

    loadPokemon(pokename.value,(pokemon) => {
        
        console.log(`Pokemon No.${pokemon.id} name is ${pokemon.name}`);
        let pokecard = document.getElementById("pokecard");

        loadPokemonAbility(pokemon.id, (ability) => {
            console.log(`Pokemon No.${ability.id} ability is ${ability.name} abilities`);
            let pokecardAbilities = document.getElementById("pokecardAbilities");
    
    
            /*Propiedad de JS para modificar contenido HTML, devuelve una cadena de texto */
        pokecard.innerHTML =    
        `
                <div class="col-md-4">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="Pokemon image">
                </div>
                <div class="col-md-8">            
                    <div class="card-header text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3 text-center">${pokemon.name}</div>
                    <div class="card-body text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-center">
                        <p class="card-text">Id: ${pokemon.id}</p>
                        <p class="card-text">Order: ${pokemon.order}</p>
                        <p class="card-text">Weight: ${pokemon.weight}</p>
                        <p>Abilities: ${ability.name}</p>
                    </div>
                </div>
        `

    
        })
    
      
    
    })    

    
}


