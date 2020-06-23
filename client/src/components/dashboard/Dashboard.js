import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import { getAuth } from '../../utils/getAuth'

// Components
import Sidebar from './Sidebar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

// Style
import styled from 'styled-components'
import { background_variant } from '../theme'

const StyledDashboard = styled.div`
    display: flex;

    .content {
        width: 80%;
        background-color: ${background_variant};
    }
`


// TODO: New user has tags suggest on homepage
// TODO: Existing user UX: HOME display current favorites, click to go to suggestions
// TODO: Pages: Home(auto), Favorites, Search(?), Suggestions,

const Dashboard = props => {

    // Connect to Spotify Web API
    useEffect(() => {
        getAuth()
    }, [])

    return(
        <StyledDashboard>
            <Sidebar></Sidebar>
            <div className="content">
                <Route path="/" component={Home}/>
                <Route path="/favorites" component={Favorites}/>
            </div>
        </StyledDashboard>
    )
}

const mapStateToProps = state => {
    return {
        songs: state.songs,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Dashboard)