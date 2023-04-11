// import React, {useState} from "react";

const ToDoForm = (props) => {
return (
    <form onSubmit={(e) => {props.handleSubmit(e);}}> 
        <input onChange={(e)=> {props.setCreateToDo(e.target.value);}} type="text" value={props.createtodo} style={{marginBottom: "20px"}}/>
        <button>Add Todo</button>
    </form>
)}

export default ToDoForm;