import React from 'react';
import './App.css';

const PastTickets = props => {
  return (
      <div className="pastTicket">
        <div>Name: {props.newTicket.name}<br />Email: {props.newTicket.email}<br />Issue: {props.newTicket.issue}</div>
        <br />
      </div>
  );
}

export default PastTickets;