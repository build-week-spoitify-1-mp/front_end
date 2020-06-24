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

    ul {
        padding: 0;
        list-style: none;

        a {
            text-decoration: none;
        }

        li {
            width: 100%;
            padding: 2% 10%;
            color: ${accent_main};
            background-color: ${background};
            font-size: 1.5rem;
            transition: .3s ease;

            &:hover {
                color: ${background};
                background-color: ${accent_main};
            }
        }
    }
`


const Sidebar = props => {
    const { url } = useRouteMatch()

    return (
        <StyledSidebar>
            <h2>Spotify Song Finder</h2>
            <ul>
                <Link to={`${url}`}><li>Home</li></Link>
                <Link to={`${url}/favorites`}><li>Favorites</li></Link>
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar