import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ pokemonList, onPokemonClick }) => (
  <div>
    {pokemonList.map((pokemon, index) => (
      <button key={index} onClick={() => onPokemonClick(index)}>
        {pokemon.name}
      </button>
    ))}
  </div>
);

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  onPokemonClick: PropTypes.func.isRequired,
};

export default NavBar