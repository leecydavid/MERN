import './App.css';
import axios from 'axios';
import React, {useState} from 'react';
import PokemonForm from './components/PokemonForm';

const App = () => {

  const [pokemon, setPokemon] = useState([])

  // getting pokemon
  const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      // console.log(response);
      setPokemon(response.data.results)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }

  // useEffect (() => {
  //   getPokemon();
  // })

  return (
    <div className="App">
      <h2>Welcome to Axios Pokemon API</h2>
      <PokemonForm getPokemon={getPokemon}/>
      {
        pokemon.map((value, index) => {
        return <p key={index}> {value.name} </p>
        })
      }
    </div>
  );
}

export default App;
