import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Planets = () => {
    const [planets, setPlanets] = useState(null);
    const {id} = useParams("");
    const navigate = useNavigate();

    // useEffect function to retrieve people data by id
    useEffect(() => {
        // useEffect always takes in a callback function
        axios.get('https://swapi.dev/api/planets/' + id + "/")
        // .get is returning us a promise and .then is returning the response
        .then((response) => {
            console.log(response)
            setPlanets(response.data);
        })
        // .catch(console.log)
        .catch(() => navigate("/error"))
        // for error message when data is not found 
    }, [id]);
    // we pass in this array of id because when we want to change planets, the get request will reload page amd run this function all over again
    // if we leave this as blank, when trying to change planets, the page will not reload with targetted data

    if (planets === null) {
        return "Loading..."
    }

    return (
        <div>
            {/* targetting planets api attributes exactly how it is stated in the database  */}
            <h2>{planets.name}</h2>
            <p>Height: {planets.climate} </p>
            <p>Mass: {planets.terrain} </p>
            <p>Hair Color: {planets.surface_water} </p>
            <p>Skin Color: {planets.population} </p>
        </div>
    )
}

export default Planets