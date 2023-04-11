import './App.css';
import React, {useState} from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

const App = () => {
  const [createtodo, setCreateToDo] = useState("");
  const [todos, setToDos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent default display until user submits form (presses add to do button)
    if (createtodo.length === 0) {
      return false
      // if input length is empty, do not run handleSubmit function
      // input area is empty, do not display an empty todo and checkbox 
    }
    const todoItem = {
      text: createtodo,
      complete: false
    }
    setToDos([...todos, todoItem]);
    setCreateToDo("");
    // console.log(createtodo)
  };

  const handleComplete = (index) => {
    const updatedToDos = todos.map((todo, i) => {
      // creating new variable to equal todos.map(targetting a singular todo, index)
      if (index === i) {
      // if index is equal to index of todo and 
        todo.complete = !todo.complete;
        // const updatedToDos = {...todo, complete:todo.complete};
        // return updatedToDos;
      }
      return todo;
      // then return the todo
    });
    setToDos(updatedToDos);
    // when we run handleToggle function, we pass in updatedToDos into setToDos
  }

  const handleDelete = (deleteIndex) => {
    const filterToDos = todos.filter((todo, i) => {
      return i !== deleteIndex;
    })
    setToDos(filterToDos);
  };
  

  return (
    <div className='todo-app'>
      <h1>To Do List</h1>
      <ToDoForm handleSubmit={handleSubmit} createtodo={createtodo} setCreateToDo={setCreateToDo}/>

      {todos.map((todo, i) => {
      return (
      <ToDo todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} key={i} i={i} />
      )
      })}
    </div>
  );
}

export default App;
