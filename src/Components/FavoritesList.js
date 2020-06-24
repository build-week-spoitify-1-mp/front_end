import React from 'react'
// import StyledSongCard from '../StyledComponents/StyledSongCard'
import StyledSongList from '../StyledComponents/StyledSongList'
import SongCard from './SongCard'


export default function FavoritesList(props) {
    const { favoriteSongs } = props

    return (
        <StyledSongList>
            {
                favoriteSongs.length > 0
                ? favoriteSongs.map(song => {
                    return <SongCard song={song} key={song.id} favoriteSongs={favoriteSongs}/>
                })
                : <h2>You don't have any songs favorited yet!</h2>
            }
        </StyledSongList>
    )
}