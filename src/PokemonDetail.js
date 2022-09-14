import './index.css';

//PokemonDetail.js : represents a card that shows Pokemon info of user's choice

export default function PokemonDetail({ pokemon }) {

    return (
        <div class = "box">
            {/* <AboutMe name="Ash" age = {10}/> */}
            <h2>No.{pokemon.id} : {pokemon.name}</h2>
            <img src = {"https://trex-sandwich.com/wdcc-workshop" + pokemon.imageUrl} width = "400" alt = ""></img>
            <p style = {{padding: 70, width: '1200px'}}> {pokemon.dexEntry} </p>
        </div>
    )
}
