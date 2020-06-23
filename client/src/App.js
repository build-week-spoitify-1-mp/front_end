import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

// Components
import Login from './components/Login'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
