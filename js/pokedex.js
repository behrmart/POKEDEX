// POKEDEX projecto por Bernardo F Martinez Meave


function boton_buscar(){
    
    let pokename = document.getElementById("pokename");
    
    //console.log(pokename.value);
    
    const loadPokemon = (id, cb) => {
        //console.log('******** Fetch and parse Pokemon API ***********************');
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            cb(data)
        }).catch(error => console.error('Error fetching pokemon:', error));
    }

    const loadPokemonAbility = (id, cb) => {
        console.log('******** Fetch and parse Pokemon Abilities API ***********************');
        fetch(`https://pokeapi.co/api/v2/ability/${id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            cb(data)
        }).catch(error => console.error('Error fetching abilities:', error));
    }

    const loadPokemonSpecies = (id, cb) => {
        //console.log('******** Fetch and parse Pokemon Species API ***********************');
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            cb(data)
        }).catch(error => console.error('Error fetching species:', error));

    }


    const pokenameLower = pokename.value.toLowerCase(); // Only accepts lowercase pokemon names
    loadPokemon(pokenameLower,(pokemon) => {
        
        console.log(`Pokemon No.${pokemon.id} name is ${pokemon.name}`);
        let pokecard = document.getElementById("pokecard");

        loadPokemonAbility(pokemon.id, (ability) => {
            console.log(`Pokemon No.${ability.id} ability is ${ability.name} abilities`);

        loadPokemonSpecies(pokemon.id, (species) => {
                console.log(`Pokemon No.${species.id} species is ${species.name}`);
            
            /*Propiedad de JS para modificar contenido HTML, devuelve una cadena de texto */
        pokecard.innerHTML =    
        `
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top img-fluid mx-auto d-block " alt="Pokemon image">
                </div>
                <div class="col-md-8">            
                    <div class="card-header text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3 text-center"><h2>${pokemon.name}</h2></div>
                    <div class="card-body text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-center">
                        <p class="card-text">Pokemon Id: <span class="text-warning-emphasis">${pokemon.id}</span></p>
                        <p class="card-text">Orden: <span class="text-warning-emphasis">${pokemon.order}</span></p>
                        <p class="card-text">Peso: <span class="text-warning-emphasis">${pokemon.weight}</span></p>
                        <p class="card-text"> Habilidad Principal: <span class="text-warning-emphasis">${ability.name}</span></p>
                        <p class="card-text"> Descripcion de Habilidad: <span class="text-warning-emphasis">${ability.effect_entries.find(entry => entry.language.name === "en").effect}</span></p>
                        <p class="card-text"> Habitat: <span class="text-warning-emphasis">${species.habitat.name}</span></p>
                        <p class="card-text"> Felicidad Base: <span class="text-warning-emphasis">${species.base_happiness}</span></p>
                        <p class="card-text"> Rango de Captura: <span class="text-warning-emphasis">${species.capture_rate}</span></p>
                    </div>
                </div>
        `

    
        })

    
    })    

    
})

}

// ALL POKEMONS

const baseUrl = 'https://pokeapi.co/api/v2';
const pokedexContainer = document.getElementById('allPokemons');

async function fetchPokemonData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchAllPokemon() {
  try {
    const response = await fetch(`${baseUrl}/pokemon?limit=350`); // Fetching the first 151 Pokémon for this example. `${baseUrl}/pokemon?limit=151` Limit number
    const data = await response.json();
    const pokemonList = data.results;

    for (const pokemon of pokemonList) {
      const pokemonData = await fetchPokemonData(pokemon.url);
      displayPokemon(pokemonData);
    }
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
}

function displayPokemon(pokemonData) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('col');

  pokemonCard.innerHTML = `
    <button type="button" class="btn btn-dark" onclick="boton_buscar2(this)" id="pokename" data-value="${pokemonData.name}" href="#startwin">
      <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
      <p>${pokemonData.name}</p>
    </button>
  `;

  pokedexContainer.appendChild(pokemonCard);
}

fetchAllPokemon();

function boton_buscar2(button){
    
  let pokename = button.getAttribute("data-value");
  
  var section = document.getElementById("startwin");
  if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }


  //console.log(pokename);
  
  const loadPokemon = (id, cb) => {
      //console.log('******** Fetch and parse Pokemon API ***********************');
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
          //console.log(data);
          cb(data)
      }).catch(error => console.error('Error fetching pokemon:', error));
  }

  const loadPokemonAbility = (id, cb) => {
      //console.log('******** Fetch and parse Pokemon Abilities API ***********************');
      fetch(`https://pokeapi.co/api/v2/ability/${id}`)
      .then(res => res.json())
      .then(data => {
          //console.log(data);
          cb(data)
      }).catch(error => console.error('Error fetching abilities:', error));
  }

  const loadPokemonSpecies = (id, cb) => {
      //console.log('******** Fetch and parse Pokemon Species API ***********************');
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(res => res.json())
      .then(data => {
          //console.log(data);
          cb(data)
      }).catch(error => console.error('Error fetching species:', error));

  }


  // const pokenameLower = pokename.value.toLowerCase(); // Only accepts lowercase pokemon names
  loadPokemon(pokename,(pokemon) => {
      
      console.log(`Pokemon No.${pokemon.id} name is ${pokemon.name}`);
      let pokecard = document.getElementById("pokecard");

      loadPokemonAbility(pokemon.id, (ability) => {
          console.log(`Pokemon No.${ability.id} ability is ${ability.name} abilities`);

      loadPokemonSpecies(pokemon.id, (species) => {
              console.log(`Pokemon No.${species.id} species is ${species.name}`);
          
          /*Propiedad de JS para modificar contenido HTML, devuelve una cadena de texto */
      pokecard.innerHTML =    
      `
              <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <img src="${pokemon.sprites.front_default}" class="card-img-top img-fluid mx-auto d-block " alt="Pokemon image">
              </div>
              <div class="col-md-8">            
                  <div class="card-header text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3 text-center"><h2>${pokemon.name}</h2></div>
                  <div class="card-body text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-center">
                      <p class="card-text">Pokemon Id: <span class="text-warning-emphasis">${pokemon.id}</span></p>
                      <p class="card-text">Orden: <span class="text-warning-emphasis">${pokemon.order}</span></p>
                      <p class="card-text">Peso: <span class="text-warning-emphasis">${pokemon.weight}</span></p>
                      <p class="card-text"> Habilidad Principal: <span class="text-warning-emphasis">${ability.name}</span></p>
                      <p class="card-text"> Descripcion de Habilidad: <span class="text-warning-emphasis">${ability.effect_entries.find(entry => entry.language.name === "en").effect}</span></p>
                      <p class="card-text"> Habitat: <span class="text-warning-emphasis">${species.habitat.name}</span></p>
                      <p class="card-text"> Felicidad Base: <span class="text-warning-emphasis">${species.base_happiness}</span></p>
                      <p class="card-text"> Rango de Captura: <span class="text-warning-emphasis">${species.capture_rate}</span></p>
                  </div>
              </div>
      `

  
      })

  
  })    

  
})

}