import React from 'react'


// Font Awesome
import { faHeart, faCompactDisc, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import styled from 'styled-components'
import { accent_main, text, background } from '../../theme'

const StyledHome = styled.div`
    h2, h3 {
        text-align: center;
        color: ${accent_main};
        font-weight: 900;
    }
    
    p {
        line-height: 2;
        color: ${text};
    }

    .home-body {
        border-radius: 20px;
        background-color: ${background};
        padding: 3%;
        margin: 3%;
    }
`

const Home = props => {
    return (
        <StyledHome>
            <h2>Home</h2>
            <div className='home-body'>
                <h3>Welcome to Spotify Suggester!</h3>
                <p>Get started by searching for one of your favorite songs using the search bar in the top left corner of the application!</p>
                <p>Hovering over a song will give you three options:
                    <ul>
                        <li><FontAwesomeIcon icon={faHeart} /> Favorite: Add a song to your favorites list.</li>
                        <li><FontAwesomeIcon icon={faCompactDisc} /> Get Suggestion: Get song reccomendations based on that song. </li>
                        <li><FontAwesomeIcon icon={faLink} /> Link: Go to Spotify page for that song.</li>
                    </ul>
                </p>
            </div>
        </StyledHome>
    )
}

export default Home