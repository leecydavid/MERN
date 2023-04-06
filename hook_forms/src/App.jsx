import {useState} from 'react';
import './App.css';

const App = () => {
  const [firstname, setFirstName] = useState("");
  // set = update 
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  return (
    <form className='App'>
      <h1>Sign Up & Validate!</h1>
      <div className='form-app'>
        <label>First Name:</label><br />
        <input type="text" onChange={e => setFirstName(e.target.value)}/>
        {/* {setFirstName} updates anytime someone changes input value of firstname  */}
        {/* e = event (when input value changes it is an event) (setFirstName = function, (e.target.value) = event is targetting the input value ) */}
      </div>
      <div className='form-app'> 
        <label>Last Name:</label><br />
        <input type="text" onChange={e => setLastName(e.target.value)}/>
      </div>
      <div className='form-app'>
        <label>Email:</label><br />
        <input type="email" onChange={e => setEmail(e.target.value)}/>
      </div>
      <div className='form-app'>
        <label>Password:</label><br />
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </div>
      <div className='form-app'>
        <label>Confirm Password:</label><br />
        <input type="password" onChange={e => setConfirmPassword(e.target.value)}/>
      </div>

      <div>
        <h2>Here's Your User Form:</h2>
          <label htmlFor="">First Name: {firstname} </label> <br />
          {/* {pass in the value of state} */}
          <label htmlFor="">Last Name: {lastname} </label> <br />
          <label htmlFor="">Email: {email} </label> <br />
          <label htmlFor="">Password: {password} </label> <br />
          <label htmlFor="">Confrim Password: {confirmpassword} </label>
      </div>
    </form>
  );
}

export default App;

