import React, { useState } from 'react';
import ContactForm from './Components/ContactFormChristian'
import SongSearch from './Components/SongSearch'
import FavoritesList from './Components/FavoritesList'
import SongPage from './Components/SongPage'
import { Switch, Route, NavLink } from 'react-router-dom'
import Recommended from './Components/Recommended';
import StyledNav from './StyledComponents/StyledNav'

function App() {
  const [favoriteSongs, setFavoriteSongs] = useState([])
  
  return (
    <div className="App">
      <StyledNav>
        <NavLink exact to='/' activeClassName='active'>Search</NavLink>&nbsp;
        <NavLink to='/favorites' activeClassName='active'>Favorites</NavLink>&nbsp;
        <NavLink to='/recommended' activeClassName='active'>Recommended</NavLink>&nbsp;
        <NavLink to='/contact' activeClassName='active'>Contact</NavLink>&nbsp;
      </StyledNav>
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
