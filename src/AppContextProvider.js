import React from 'react';
import { useState } from 'react';
import pokemons from './pokemon.json';

export const AppContext = React.createContext({ list: [] });

export function AppContextProvider({ children }) {

    //initialise the pokemon array
    const initPokemon = pokemons[0];

    // Stateful todo list
    const [currentPokemon, setPokemon] = useState(initPokemon);

    function onPokemonClick(index) {
        setPokemon(pokemons[index]);
    }

    // All this info will be made available to any children of
    // this provider
    const context = {
        currentPokemon,
        onPokemonClick
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}