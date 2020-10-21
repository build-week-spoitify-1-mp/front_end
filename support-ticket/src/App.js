import React from 'react';
import './App.css';
import Ticket from './Ticket';
import Register from "./Login";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={Register} />
        <Route exact path="/Ticket" component={Ticket} />
      </BrowserRouter>
    </div>
  );
}

export default App;
