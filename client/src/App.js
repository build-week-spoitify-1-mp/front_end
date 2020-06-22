import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

// Components
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <PrivateRoute exact path="/protected" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
