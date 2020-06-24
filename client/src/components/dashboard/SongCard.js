import React from 'react'

// Style
import styled from 'styled-components'
import { background, background_variant, accent_main, accent_variant } from '../theme'

const StyledCard = styled.div`
    margin: 0 2%;
    width: 23%;
    background-color: ${background};
    border-radius: 10px;

    .image-container {
        position: relative;
        width: 100%;

        img {
            width: 100%;
            height: auto;
            border-radius: 10px 10px 0 0;
        }

        .overlay {
            position: absolute;
            border-radius: 10px 10px 0 0;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 98.9%;
            width: 100%;
            opacity: 0;
            transition: .3s ease;
            background-color: ${accent_main};
        }

        &:hover{
            .overlay {
                opacity: 0.7;
            }
        }
    }

    .text-container {
        padding: 0 5%;
        .song-title {
            color: ${accent_main};
        }

        .song-artist {
            color: ${accent_variant};
        }
    }

`

const SongCard = props => {

    return (
        <StyledCard>
            <div className='image-container'>
                <img src={props.song.album.images[1].url} alt={`Album art of the album "${props.song.album.name}"`}/>
                <div className="overlay">
                    <button>favorite</button>
                    <button>get suggestion</button>
                    <button>link to song</button>
                </div>
            </div>
            <div className='text-container'>
                <p className='song-title'>{props.song.name}</p>
                <p className='song-artist'>{props.song.artists[0].name}</p>
            </div>
        </StyledCard>
    )
}

export default SongCard