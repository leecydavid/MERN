import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [boxes, setBoxes] = useState([])
  // 

  // const addNewBox = (newBox) => {
  //   setBoxes([...boxes, newBox]);
  // }

  return (
    <div className="App">
      <BoxForm input = {boxes} setNewInput = {setBoxes}/>
      {boxes.map((box, i) => {
        return (
          <div key = {i}>
          <BoxDisplay input={box}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
