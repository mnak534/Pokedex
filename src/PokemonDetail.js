import './index.css';

export default function PokemonDetail({ pokemon }) {

    return (
        <div class = "box">
            <h2>No.{pokemon.id} : {pokemon.name}</h2>
            <img src = {"https://trex-sandwich.com/wdcc-workshop" + pokemon.imageUrl} width = "400" alt = ""></img>
            <p style = {{padding: 70, width: '1200px'}}> {pokemon.dexEntry} </p>
        </div>
    )
}

