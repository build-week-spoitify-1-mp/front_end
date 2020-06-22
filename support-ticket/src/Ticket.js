import React, { useState } from 'react';
import './App.css';
import { useHistory } from "react-router-dom";

function Ticket() {
  const history = useHistory();

  const [myTicket, setMyTicket] = useState({
    name: "",
    email: "",
    issue: ""
  });
    
  const [finalTicket, setFinalTicket] = useState({
    name: "",
    email: "",
    issue: ""
  });
    
  const inputChange = (event) => {
    setMyTicket({
      ...myTicket,
      [event.target.name]: event.target.value
    });
  };

  const formSubmit = (event) => {
    event.preventDefault()
    setFinalTicket(myTicket)
    console.log(myTicket)
    history.push("/TicketReceived")
  };

  return (
    <div className="options">
      <h1>We want to help</h1>
      <p>Please enter your name, email and give us detailed information about what problems you ran into while using our app</p>
      <form onSubmit={formSubmit}>
        <label htmlFor="name" className="topTwoInputs">Name:
          <input
            id="name"
            name="name"
            type="text" 
            placeholder="Enter Name" 
            value={myTicket.name}
            onChange={inputChange} 
          />
        </label>

        <label htmlFor="email" className="topTwoInputs">Email:
          <input
            id="email"
            name="email"
            type="text" 
            placeholder="Enter Email" 
            value={myTicket.email}
            onChange={inputChange} 
          />
        </label>
        <br />
        <label htmlFor="issue" className="bottomInput">Tell us what issue you are haveing:
          <textarea
            className="issues"
            id="issue"
            name="issue"
            rows="8"
            cols="50" 
            placeholder="Your issue" 
            value={myTicket.issue}
            onChange={inputChange} 
          />
        </label>
        <br /><button type="submit" className="submit">Submit Ticket</button>
      </form>
    </div>
  )
}

export default Ticket;
