import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState(null);
    const {id} = useParams("");
    const navigate = useNavigate();

    // useEffect function to retrieve people data by id
    useEffect(() => {
        // useEffect always takes in a callback function
        axios.get('https://swapi.dev/api/people/' + id + "/")
        // .get is returning us a promise and .then is returning the response
        .then((response) => {
            console.log(response)
            setPeople(response.data);
        })
        // .catch(console.log)
        .catch(() => navigate("/error"));
        // for error message when data is not found
    }, [id]);
    // we pass in this array of id because when we want to change people, the get request will reload page amd run this function all over again
    // if we leave this as blank, when trying to change people, the page will not reload with targetted data

    if (people === null) {
        return "Loading..."
    }

    return (
        <div>
            {/* targetting people api attributes exactly how it is stated in the database  */}
            <h2>{people.name}</h2>
            <p>Height: {people.height} </p>
            <p>Mass: {people.mass} </p>
            <p>Hair Color: {people.hair_color} </p>
            <p>Skin Color: {people.skin_color} </p>
        </div>
    )
}

export default People