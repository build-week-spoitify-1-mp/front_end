import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getAuth } from '../utils/getAuth'
import { axiosSpotify } from '../utils/axiosSpotify'
import StyledSongPage from '../StyledComponents/StyledSongPage'

export default function SongPage(props) {
    const { songId } = useParams()
    const [song, setSong] = useState(null)
    const [artists, setArtists] = useState([])
    const [duration, setDuration] = useState()
    const history = useHistory()

    const backButtonOnClick = e => {
        history.goBack()
    }

    const msToMinutesandSeconds = ms => {
        const minutes = Math.floor(ms / 60000)
        const seconds = Math.round((ms % 60000) / 1000)
        return `${minutes} minutes ${seconds} seconds`
    }
    
    useEffect(() => {
        getAuth()
    }, [])

    useEffect(() => {
        axiosSpotify()
        .get(`/tracks/${songId}`)
        .then(response => {
            console.log(response.data)
            setSong(response.data)
        })
        .catch(error => {console.log(error)})
    }, [songId])

    useEffect(() => {
        if (song){
            setArtists(
                song.artists.map(artist => {
                    return artist.name
                })
            )

            setDuration(msToMinutesandSeconds(song.duration_ms))
        }
    }, [song])

    if (!song) {
        return <h1>Loading song...</h1>
    }

    return (
        <StyledSongPage>
            <div className='song-info'>
                <button onClick={backButtonOnClick}>Back</button>
                <h2>Track name: {song.name}</h2>
                <h2>{artists.length > 1 ? 'Artists:' : 'Artist:'}&nbsp;
                    {
                        <span className='artists'>{artists.join(", ")}</span>
                    }
                </h2>
                <p>Album: {song.album.name}</p>
                <p>Album release date: {song.album.release_date}</p>
                <p>Duration: {duration}</p>
                {
                    song.explicit ? <p>Explicit</p> : <p>Non explicit</p>
                }
            </div>
            <img src={song.album.images[0].url} alt={`Cover art for ${song.album.name}`} />
        </StyledSongPage>
    )
}