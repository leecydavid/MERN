// destrucure props to getPokemon
const PokemonForm = ({getPokemon}) => {
    return (
        <div>
            <button onClick= {() => {getPokemon()}}>Fetch Pokemon</button>
        </div>
    )
}

export default PokemonForm;