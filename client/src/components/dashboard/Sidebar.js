import React from 'react'
import { Link, Switch, useRouteMatch } from 'react-router-dom';
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


const Sidebar = props => {
    const { url } = useRouteMatch()

    return (
        <StyledSidebar>
            <h2>Spotify Song Finder</h2>
            <ul>
                <li>
                    <Link to={`${url}`}>Home</Link>
                </li>
                <li>
                    <Link to={`${url}/favorites`}>Favorites</Link>
                </li>
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar