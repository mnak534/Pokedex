import PokemonList from './PokemonList';
import React from 'react';

function MainPage() {
  return (
    <div>
      <React.Fragment>
        <h1>Pokédex</h1>
        <PokemonList/>
      </React.Fragment>
    </div>
  );
}

export default MainPage;