import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard.jsx';
import NavBar from './components/NavBar.jsx';
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
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
  ]; 

  const App = () => {
    const [pokemonCount, setPokemonCount] = useState(0);
  
    const handleClickNext = () =>
      setPokemonCount(
        pokemonCount < pokemonList.length - 1 ? pokemonCount + 1 : pokemonCount
      );
  
    const handleClickPrevious = () =>
      setPokemonCount(pokemonCount > 0 ? pokemonCount - 1 : pokemonCount);
  
    const Pokemon = pokemonList[pokemonCount];
  
    return (
      <div>
        <PokemonCard pokemon={Pokemon} />
        <NavBar
          onNextClick={handleClickNext}
          onPreviousClick={handleClickPrevious}
          showPrevious={pokemonCount > 0}
          showNext={pokemonCount < pokemonList.length - 1}
        />
      </div>
    );
};

export default App;

