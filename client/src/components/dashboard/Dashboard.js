import React, { useEffect } from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux'

// Actions
import { getSongs, getUser } from '../../actions'

// Components
import Sidebar from './Sidebar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Suggestions from './pages/Suggestions'
import Search from './pages/Search'

// Utils
import { getAuth } from '../../utils/getAuth'


// Style
import styled from 'styled-components'
import { background_variant } from '../theme'

const StyledDashboard = styled.div`
    display: flex;

    .content {
        margin-left: 20%;
        min-height: 100vh;
        width: 80%;
        background-color: ${background_variant};
    }
`

// General
// TODO: New user has tags suggest on homepage
// TODO: Existing user UX: HOME display current favorites, click to go to suggestions
// TODO: Pages: Home(auto), Favorites, Search(?), Suggestions
// TODO: Hook up adding/deleteing favorite song

// Sidebar
// TODO: add logout button to bottom

const Dashboard = props => {
    const { getUser, getSongs } = props
    const { path } = useRouteMatch()

    // Connect to Spotify Web API & Get user info
    useEffect(() => {
        getAuth()
    }, [])

    useEffect(() => {
        getUser()
    }, [props.needsRefresh])

    useEffect(() => {
        if(props.user.favesongs.length > 0) {
            getSongs(props.user.favesongs)
        }
    }, [props.user])

    const changeHistory = location => {
        props.history.push(location)
    }

    return(
        <StyledDashboard>
            <Sidebar changeHistory={changeHistory}/>
            <div className='content'>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Home />
                    </Route>
                    <Route path={`${path}/favorites`}>
                        <Favorites songData={props.songData} changeHistory={changeHistory}/>
                    </Route>
                    <Route exact path={`${path}/suggestions`}>
                        <Suggestions lastFaveTrackID={{...props.user.favesongs[(props.user.favesongs.length - 1)]}}/>
                    </Route>
                    <Route path={`${path}/suggestions/:trackid`}>
                        <Suggestions />
                    </Route>

                    <Switch>
                        <Route exact path={`${path}/search`}>
                            <h2>Please enter a search query</h2>
                        </Route>
                        <Route path={`${path}/search/:query`}>
                            <Search changeHistory={changeHistory}/>
                        </Route>
                    </Switch>
                </Switch>
            </div>
        </StyledDashboard>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        songData: state.songData,
        error: state.error,
        isFetchingData: state.isFetchingData,
        needsRefresh: state.needsRefresh
    }
}

export default connect(mapStateToProps, { getSongs, getUser })(Dashboard)