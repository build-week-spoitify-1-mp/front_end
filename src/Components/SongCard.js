import React, { useEffect, useState } from 'react'
import StyledSongCard from '../StyledComponents/StyledSongCard'
import { Link } from 'react-router-dom'

export default function SongCard({ song, setFavoriteSongs, favoriteSongs }) {
    const [artists, setArtists] = useState([])
    const [favorited, setFavorited] = useState(false)

    const onFavorite = e => {
        setFavoriteSongs([
            ...favoriteSongs,
            song,
        ])
    }

    // const onUnfavorite = e => {
    //     const newSongList = favoriteSongs.filter(eachSong => {
    //         return eachSong.id !== song.id
    //     })
    //     setFavoriteSongs([
    //         ...newSongList,
    //     ])
    // }

    useEffect(() => {
        setArtists(
            song.artists.map(artist => {
                return artist.name
            })
        )
    }, [song])

    useEffect(() => {
        const isSongAlreadyFavorited = favoriteSongs.filter(eachSong => {
            return song.id === eachSong.id
        })
        if (isSongAlreadyFavorited.length === 0){
            setFavorited(false)
        }else{
            setFavorited(true)
        }
    }, [favoriteSongs, song.id])

    return (
        <StyledSongCard>
            <div className='song-info'>
            <p>Title: {song.name}</p>
            <p>{artists.length > 1 ? 'Artists:' : 'Artist:'}&nbsp;
                {
                    <span className='artists'>{artists.join(", ")}</span>
                }
            </p>
            <p>Album: {song.album.name}</p>
            {
                !favorited 
                ? <button onClick={onFavorite}>Add to favorites</button>
                : ''
            }
            </div>
            <Link to={`/songs/${song.id}`}>
                <img src={song.album.images[0].url} alt={`Album cover for ${song.album.name}`}/>
            </Link>
        </StyledSongCard>
    )
}