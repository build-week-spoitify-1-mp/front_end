import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// Reducers
import { songReducer } from './reducers/songReducer'

// Components
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/dashboard/Dashboard'

const store = createStore(songReducer, applyMiddleware(thunk))



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
