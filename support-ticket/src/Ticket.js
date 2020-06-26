import React, { useState, useEffect } from 'react';
import './App.css';
import PastTickets from "./PastTickets";
import * as yup from "yup";

function Ticket() {

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field"),
    issue: yup.string().required("You must give us a issue")
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    issue: ""
  });

  const [myTicket, setMyTicket] = useState(
    {
      name: "",
      email: "",
      issue: ""
    }
  );
    
  const inputChange = (event) => {
    event.persist()
    setMyTicket({
      ...myTicket,
      [event.target.name]: event.target.value
    });
    yup.reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then( valid => {
      setErrors({
        ...errors,
        [event.target.name]: ""
      })
    })
    .catch( err => {
      console.log(err.errors);
      setErrors({
        ...errors,
        [event.target.name]: err.errors[0]
      })
    })
  };

  const [finalTicket, setFinalTicket] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault()
    setFinalTicket([...finalTicket, myTicket])
    console.log(finalTicket);
  };

  const deleteButton = (event) => {
    event.preventDefault()
    setFinalTicket([]);
    console.log(finalTicket);
  }

  const editButton = (event) => {
    event.preventDefault()
    var numToEdit = finalTicket.length - 1;
    setFinalTicket(finalTicket[numToEdit] = [myTicket])
    console.log(finalTicket);
  }

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
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
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
          {errors.name.length > 0 ? <p className="error">{errors.email}</p> : null}
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
          {errors.name.length > 0 ? <p className="error">{errors.issue}</p> : null}
        </label>
        <br /><button type="submit" className="submit">Submit Ticket</button>
      </form>
      <h1>Your Tickets:</h1>
      {finalTicket.map(ticketObj => {
        return <PastTickets key={ticketObj.name} newTicket={ticketObj} />
      })}

      <form onSubmit={deleteButton}>
        <button type="submit" className="deleteButton">Delete All Tickets</button>
      </form>
      <form onSubmit={editButton}>
        <button type="submit" className="editButton">Edit Last Ticket</button>
      </form>
    </div>
  )
}

export default Ticket;