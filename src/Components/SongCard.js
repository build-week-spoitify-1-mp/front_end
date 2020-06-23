import React, { useEffect, useState } from 'react'
import StyledSongCard from '../StyledComponents/StyledSongCard'

export default function SongCard({ song }) {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        setArtists(
            song.artists.map(artist => {
                return artist.name
            })
        )
    }, [song])

    return (
        <StyledSongCard>
            <div className='song-info'>
            <p>Title: {song.name}</p>
            <p>Artist(s):&nbsp;
                {
                    <span>{artists.join(", ")}</span>
                }
            </p>
            <p>Album: {song.album.name}</p>
            </div>
            <img src={song.album.images[0].url} alt={`Album cover for ${song.album.name}`}/>
        </StyledSongCard>
    )
}