import React, { useState } from 'react';
import ContactForm from './Components/ContactFormChristian'
import SongSearch from './Components/SongSearch'
import FavoritesList from './Components/FavoritesList'
import SongPage from './Components/SongPage'
import { Switch, Route, NavLink } from 'react-router-dom'
import Recommended from './Components/Recommended';

function App() {
  const [favoriteSongs, setFavoriteSongs] = useState([])
  
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Search</NavLink>&nbsp;
        <NavLink to='/favorites'>Favorites</NavLink>&nbsp;
        <NavLink to='/recommended'>Recommended</NavLink>&nbsp;
        <NavLink to='/contact'>Contact</NavLink>&nbsp;
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
        <Route path='/recommended'>
          <Recommended favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs}/>
        </Route>
        <Route path='/'>
          <SongSearch setFavoriteSongs={setFavoriteSongs} favoriteSongs={favoriteSongs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
