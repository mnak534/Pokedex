import './index.css';


//PokemonDetail.js : represents a card that shows Pokemon info of user's choice

export default function PokemonDetail({ pokemon }) {

    const thisURL = 'https://trex-sandwich.com/wdcc-workshop/api/pokemon';
    // const {data, isLoading, error} = useGet(url, '');

    return (
        <div class = "box">
            {/* <AboutMe name="Ash" age = {10}/> */}
            <h2>No.{pokemon.id} : {pokemon.name}</h2>
            <img src = {"https://trex-sandwich.com/wdcc-workshop" + pokemon.imageUrl} width = "400" alt = ""></img>
            <p style = {{padding: 70, width: '1200px'}}> {pokemon.dexEntry} </p>
            <useGet url = {thisURL} initialState = {'id'}/>
        </div>
    )
}

// function AboutMe({name, age}) {
//     return (
//         <p>My name is {name}, and I am {age} years old!</p>
//     )
// }

