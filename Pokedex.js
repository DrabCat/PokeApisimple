import React, { useState } from 'react';
import axios from 'axios';

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState('');  // Estado para guardar el nombre del Pokémon

  const fetchPokemon = () => {
    // Hacer la petición a la API con el nombre del Pokémon que el usuario ingresa
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        // Mostrar la información del Pokémon en la consola
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <div>
      <h1>Pokedex humilde</h1>
      <input
        type="text"
        placeholder="Escribe el nombre del Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}  // Actualiza el estado con el valor ingresado
      />
      {/* Botón para buscar el Pokémon */}
      <button onClick={fetchPokemon}>Buscar</button>
    </div>
  );
}

export default Pokedex;