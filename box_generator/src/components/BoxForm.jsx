import React, {useState} from 'react';

const BoxForm = (props) => {
    const {input, setNewInput} = props;
    const [color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        // props.addNewBox({color: createNewBox})
        const newBox = {
            color: color
        }
        setNewInput([...input, newBox]);
        setColor("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Choose Your Favorite Color!</h1>
            <label>Type Your Fave Color!</label> <br />
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            <input type="submit" value="Add Color"/>
        </form>
    );
};
export default BoxForm;