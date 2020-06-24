import React, { useEffect, useState } from 'react'
import { getAuth } from '../utils/getAuth'
import { axiosSpotify } from '../utils/axiosSpotify'
import StyledSongList from '../StyledComponents/StyledSongList'
import SongCard from '../Components/SongCard'

export default function Recommended(props) {
    const { favoriteSongs, setFavoriteSongs } = props
    const [recTracks, setRecTracks] = useState([])

    useEffect(() => {
        getAuth()
    }, [])

    useEffect(() => {
        const getSeedTrackIds = () => {
            const seedTrackIdsArray = favoriteSongs.map(song => {
                    return song.id
            })
    
            return seedTrackIdsArray.join(',')
        }
        
        if (favoriteSongs.length > 0){
            axiosSpotify()
                .get(`/recommendations?seed_tracks=${getSeedTrackIds()}`)
                .then(res => {
                    console.log(res.data.tracks)
                    setRecTracks(res.data.tracks)
                })
                .catch(err => { 
                    console.log('There be an error', err)
                })
        }
    }, [favoriteSongs])
    
    return (
        <StyledSongList>
            {
                recTracks.length > 0 ? 
                recTracks.map(song => {
                    return <SongCard song={song} favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs} key={song.id} />
                })
                : <h2>Oops! You don't have any songs favorited :(</h2>
            }
        </StyledSongList>
    )
}