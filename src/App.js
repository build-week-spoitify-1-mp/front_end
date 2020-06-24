import React, { useState } from 'react';
import ContactForm from './Components/ContactFormChristian'
import SongSearch from './Components/SongSearch'
import FavoritesList from './Components/FavoritesList'
import SongPage from './Components/SongPage'
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
  const [favoriteSongs, setFavoriteSongs] = useState([])
  
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Search</NavLink>&nbsp;
        <NavLink to='/contact'>Contact</NavLink>&nbsp;
        <NavLink to='/favorites'>Favorites</NavLink>
      </nav>
      <Switch>
        <Route path='/songs/:songId'>
          <SongPage />
        </Route>
        <Route path='/contact'>
          <ContactForm />
        </Route>
        <Route path='/favorites'>
          <FavoritesList favoriteSongs={favoriteSongs} />
        </Route>
        <Route path='/'>
          <SongSearch setFavoriteSongs={setFavoriteSongs} favoriteSongs={favoriteSongs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
