import pokemonList from'./pokemon.json';
import {AppContext} from './AppContextProvider'
import {useContext} from 'react';
import PokemonDetail from './PokemonDetail';

function PokemonList() {

    const {currentPokemon, onPokemonClick} = useContext(AppContext);

    return(
        <div className='parent'>
            <ul classsName = 'menu'>
                {pokemonList.map((pokemon, index) => (
                    <li key = {pokemon.id} onClick={() => onPokemonClick(index)} style = {{width: '400px', fontSize: '30px'}}> No.{pokemon.id} : {pokemon.name} </li>
                ))}
            </ul>
            <PokemonDetail pokemon = {currentPokemon} className = 'content'/> 
        </div>
    );
}

export default PokemonList;