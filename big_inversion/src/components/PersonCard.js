// import React from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    // const PersonCard = (props) => {}
        // {props.lastName} {props.firstName} {props.age} {props.hairColor} 
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default  PersonCard;