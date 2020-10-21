import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Register() {
  const [accountInfo, setAccountInfo] = useState({
    name: "",
    password: "",
  });

  const [newLogin, setNewLogin] = useState({
    name: "",
    password: "",
  });

  const inputChange = (event) => {
    setAccountInfo({
      ...accountInfo,
      [event.target.name]: event.target.value
    });
  };

  const formSubmit = (event) => {
    event.preventDefault()
    setNewLogin(accountInfo)
    console.log(newLogin)
    // history.push("/TicketReceived")
  };
  
  return (
      <div className="login">
        <h1>Register an account:</h1>
        <form onSubmit={formSubmit}>
          <label htmlFor="name">Username:
            <input
              id="name"
              name="name"
              type="text" 
              placeholder="Username" 
              value={accountInfo.name}
              onChange={inputChange} 
            />
          </label>
          <label htmlFor="password">Password:
            <input
              id="password"
              name="password"
              type="text" 
              placeholder="Password" 
              value={accountInfo.password}
              onChange={inputChange} 
            />
          </label>
          <br /><button type="submit" className="submitAccount">Create Account</button>
        </form>
        <br /><Link to="/Ticket" className="supportLink">Support</Link>
      </div>
  );
}

export default Register;