import React, { useState, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux'

// Actions
import { getSongs, getUser } from '../../actions'

// Components
import Sidebar from './Sidebar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

// Utils
import { getAuth } from '../../utils/getAuth'
import { addFavoriteSong } from '../../utils/addFavoriteSong'


// Style
import styled from 'styled-components'
import { background, background_variant, accent_main } from '../theme'

const StyledDashboard = styled.div`
    display: flex;

    .sidebar {
        width: 20%;
        min-height: 100vh;
        background-color: ${background};

        h2 {
            text-align: center;
            color: ${accent_main}
        }
    }
    .content {
        width: 80%;
        background-color: ${background_variant};
    }
`

// General
// TODO: New user has tags suggest on homepage
// TODO: Existing user UX: HOME display current favorites, click to go to suggestions
// TODO: Pages: Home(auto), Favorites, Search(?), Suggestions,

// Sidebar
// TODO: add search bar
// TODO: add menu items
// TODO: add logout button to bottom

const Dashboard = props => {
    const { getUser } = props
    const { path } = useRouteMatch()

    // Connect to Spotify Web API & Populate Store with songs
    useEffect(() => {
        getAuth()
        getUser()
    }, [])

    return(
        <StyledDashboard>
            <Sidebar />
            <div className='content'>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Home />
                    </Route>
                    <Route path={`${path}/favorites`}>
                        <Favorites favesongs={props.user.favesongs}/>
                    </Route>
                </Switch>
            </div>
        </StyledDashboard>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        error: state.error,
        isFetchingData: state.isFetchingData,
    }
}

export default connect(mapStateToProps, { getSongs, getUser })(Dashboard)