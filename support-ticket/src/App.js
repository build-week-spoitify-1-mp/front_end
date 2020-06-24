import React from 'react';
import './App.css';
import TicketReceived from "./TicketReceived";
import Ticket from './Ticket';
import Register from "./Login";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={Register} />
        <Route exact path="/Ticket" component={Ticket} />
        <Route exact path="/TicketReceived" component={TicketReceived} />
      </BrowserRouter>
    </div>
  );
}

export default App;
