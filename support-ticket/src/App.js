import React from 'react';
import './App.css';
import TicketReceived from "./TicketReceived";
import Ticket from './Ticket';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={Ticket} />
        <Route path="/TicketReceived" component={TicketReceived} />
      </BrowserRouter>
    </div>
  );
}

export default App;
