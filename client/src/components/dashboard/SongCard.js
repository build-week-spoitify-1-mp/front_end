import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'
import { addFave, deleteFave } from '../../actions/index'

// Style
import styled from 'styled-components'
import { background, background_variant, accent_main, accent_variant } from '../theme'

// Font Awesome
import { faHeart, faHeartBroken, faCompactDisc, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledCard = styled.div`
    margin: 0 2%;
    width: 20%;
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

            display:flex;
            justify-content:center;
            align-items:center;

            button {
                opacity: 0.7;
                background-color: ${background};
                border: none;
                color: white;
                padding: 4% 5%;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 2rem;
                margin: 5% 2%;
                transition: .3s ease;

                border-radius: 10px;

                &:hover {
                    opacity: 1;
                }
            }
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
            margin: 2% 0;
            color: ${accent_main};
            font-weight: 900;
            font-size: 1.5rem;
        }

        .song-artist {
            margin-top: 2%;
            color: ${accent_variant};
        }
    }

`

const SongCard = props => {
    const [favorited, setFavorited] = useState(false)
    const [faveObj, setFaveObj] = useState()

    const handleFavorite = () => {
        // If song is favorited, delete it
        // If the song isn't favorited, add it
        if(favorited){
            props.deleteFave(faveObj.favesongid)
        } else {
            props.addFave(props.user.userid, props.song.id)
        }
    }

    const handleSuggest = () => {
        props.changeHistory(`/dashboard/suggestions/${props.song.id}`)
    }

    useEffect(() => {
        // set faveID to favesong object if found in the favesong
        const result = props.user.favesongs.find((favesong) => {
            return (favesong.trackid === props.song.id)
        })
        if(result){
            setFaveObj({
                ...faveObj,
                favesongid: result.favesongid, 
                trackid: result.trackid
            })
        }
    }, [])

    useEffect(() => {
        if (faveObj) {
            setFavorited(favorited => !favorited)
        }
    }, [faveObj])

    return (
        <StyledCard>
            <div className='image-container'>
                <img src={props.song.album.images[1].url} alt={`Cover art of the album "${props.song.album.name}"`}/>
                <div className="overlay">
                    <button className='favorite'>
                        <FontAwesomeIcon icon={faHeart} onClick={handleFavorite}/>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faCompactDisc} onClick={handleSuggest}/>
                    </button>
                    <button><FontAwesomeIcon icon={faLink} /></button>
                </div>
            </div>
            <div className='text-container'>
                <p className='song-title'>{props.song.name}</p>
                <p className='song-artist'>{props.song.artists[0].name}</p>
            </div>
        </StyledCard>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { addFave, deleteFave })(SongCard)