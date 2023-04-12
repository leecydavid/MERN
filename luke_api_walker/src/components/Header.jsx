import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './starwars.css';

const Header = () => {

    //1. useState function
    const [header, setHeader] = useState({
        // key value pairs
        option: "people",
        // default select value = people
        id: ""
        // id as empty string because we HAVE to input id value, there is no default id display in our input box
    });
    
    //2. useNavigate & handleSubmit function
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        navigate("/" + header.option + "/" + header.id)
        // navigating to people/planets by id 
    }

    //3. handleChange function 
    const handleChange = (e) => {
        setHeader({
            ...header,
            // spread header is copying everything from header state ->
            [e.target.name] : e.target.value
            // changing the variable name only in header state 
            // event is targetting name =>  updated targetted value (line 26, 27)
        })
    }

    return (
        <form onSubmit={handleSubmit} >
            <h1>API StarWars</h1>
            <label> Search: </label>
            <select name='option' value={header.option} onChange={handleChange}>
                {/* name=option must match key value pair line 8 */}
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label > ID: </label>
            <input name='id' value={header.id} type="Number" onChange={handleChange} /> 
            {/* name=id must match key value pair line 9 */}
            <button className='header-button'>Search</button>
        </form>
    )
}

export default Header