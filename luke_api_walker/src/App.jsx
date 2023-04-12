import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* :id is our param */}
        <Route path='/people/:id' element={< People />}> </Route>
        <Route path='/planets/:id' element={< Planets />}> </Route>
        <Route path='/error' element={< Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
