import React, {useEffect, useState} from 'react'
import axios from 'axios';

const PokemonPics = ({thispokemon}) => {


    const [onepokemon, setOnePokemon] = useState({
        name: "",
        sprites: {
            front_default: ""
        }
    });

    const getPokemon = (url) => {
        axios.get(url)
            .then((response) => {
                setOnePokemon(response.data)
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            }) 
    }

    useEffect(() => {
        getPokemon(thispokemon.url)
    })

    return (
        <div>
            <p> {onepokemon.name} </p>
            <img src="{onepokemon.sprite.front_default}" alt=""></img>
        </div>
    )
}

export default PokemonPics