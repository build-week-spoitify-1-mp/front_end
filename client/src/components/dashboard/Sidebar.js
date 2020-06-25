import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

// Style
import styled from 'styled-components'
import { background, accent_main } from '../theme'

// Font Awesome
import { faHome, faHeart, faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import SearchBar from './SearchBar'

const StyledSidebar = styled.div`
    position: fixed;
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
            padding: 4% 0;
            color: ${accent_main};
            background-color: ${background};
            font-size: 1.5rem;
            transition: .3s ease;

            span {
                padding: 0 10%;
            }

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
            <h2>Spotify Suggester</h2>
            <SearchBar changeHistory={props.changeHistory}/>
            <ul>
                <Link to={`${url}`}><li><span><FontAwesomeIcon icon={faHome} /> Home</span></li></Link>
                <Link to={`${url}/favorites`}><li><span><FontAwesomeIcon icon={faHeart} /> Favorites</span></li></Link>
                <Link to={`${url}/suggestions`}><li><span><FontAwesomeIcon icon={faCompactDisc} /> Suggestions</span></li></Link>
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar