import React from 'react'
import { Link, Switch } from 'react-router-dom';
// Style
import styled from 'styled-components'
import { background, accent_main } from '../theme'

const StyledSidebar = styled.div`
    width: 20%;
    min-height: 100vh;
    background-color: ${background};

    h2 {
        text-align: center;
        color: ${accent_main}
    }
`
// TODO: add search bar
// TODO: add menu items
// TODO: add logout button to bottom

const Sidebar = props => {

    return (
        <StyledSidebar>
            <h2>Spotify Song Finder</h2>
        </StyledSidebar>
    )
}

export default Sidebar