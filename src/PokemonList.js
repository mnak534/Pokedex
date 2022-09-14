import pokemonList from'./pokemon.json';
import {AppContext} from './AppContextProvider'
import {useContext} from 'react';
import PokemonDetail from './PokemonDetail';

function PokemonList() {

    const {currentPokemon, onPokemonClick} = useContext(AppContext);

    return(
        <div>
            <PokemonDetail pokemon = {currentPokemon}/>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key = {pokemon.id} onClick={() => onPokemonClick(index)}> No.{pokemon.id} : {pokemon.name} </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;