import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div className='App'>
      <p>
      <PersonCard firstName='Kobe' lastName='Bryant' age={38} hairColor='Black' />
      <PersonCard firstName='Allen' lastName='Iverson' age={40} hairColor='Purple' />
      <PersonCard firstName='Shaq' lastName='Diesel' age={50} hairColor='Gold' />
      <PersonCard firstName='Kyrie' lastName='Irving' age={30} hairColor='Grey' />
      </p>
    </div>
  );
}

export default App;
