import React from 'react';
import ContactForm from './Components/ContactFormChristian'
import SongSearch from './Components/SongSearch'
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Search</NavLink>&nbsp;
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      <Switch>
        <Route path='/contact'>
          <ContactForm />
        </Route>
        <Route path='/'>
          <SongSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
