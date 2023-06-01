import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard.jsx'
import './App.css'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ]; 

const App = () => {
  const [pokemonCount, setPokemonCount] = useState (0);

  const handleClickNext = () =>
  setPokemonCount(
    pokemonCount < pokemonList.length - 1 ? pokemonCount + 1 : pokemonCount
  );
const handleClickPrevious = () =>
    setPokemonCount(pokemonCount > 0 ? pokemonCount - 1 : pokemonCount);
    
const Pokemon = pokemonList[pokemonCount];

return (
  <div>
    <img src={Pokemon.imgSrc} alt={Pokemon.name} />
    <div>
      {pokemonCount > 0 ? (
        <button onClick={handleClickPrevious}>Previous</button>
      ) : undefined}
      {pokemonCount < pokemonList.length -1 ?  (
        <button onClick={handleClickNext}>Next</button>
      ) : undefined}
  </div>
</div>
)
};

export default App;
