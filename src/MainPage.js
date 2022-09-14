import PokemonList from './PokemonList';
import React from 'react';

function MainPage() {
  return (
    <div>
      <h1>Pokédex</h1>
        <PokemonList/>
        {/* <Outlet/> */}
    </div>
  );
}

export default MainPage;