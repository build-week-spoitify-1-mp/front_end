import React, { useState, useEffect } from 'react'
import SongCard from './SongCard'
import { axiosSpotify } from '../utils/axiosSpotify'
import { getAuth } from '../utils/getAuth'
import StyledSongList from '../StyledComponents/StyledSongList'
import StyledSearchBar from '../StyledComponents/StyledSearchBar'

export default function SongSearch(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [queryString, setQueryString] = useState('')
    const [songList, setSongList] = useState([])
    const { setFavoriteSongs, favoriteSongs } = props 
    
    const onSearchQueryChange = e => {
        const newQuery = e.target.value
        setSearchTerm(newQuery)
    }

    const onSearchSubmit = e => {
        e.preventDefault()
        setQueryString(searchTerm.trim().split(" ").join("+"))
    }

    useEffect(() => {
        getAuth()
    }, [])

    useEffect(() => {
        queryString !== '' &&
        axiosSpotify()
            .get(`/search?q=${queryString}&type=track`)
            .then(res => {
                setSongList(res.data.tracks.items)
            })
            .catch(err => { 
                console.log(err)
            })
    }, [queryString])

    return (
        <div>
            <StyledSearchBar onSubmit={onSearchSubmit}>
                <input 
                    type="text"
                    name="searchQuery"
                    value={searchTerm}
                    onChange={onSearchQueryChange}
                />&nbsp;
                <button>Search</button>
            </StyledSearchBar>
            
            <StyledSongList>
                {
                    queryString !== ''
                    ? songList.map(song => {
                        return <SongCard key={song.id} song={song} setFavoriteSongs={setFavoriteSongs} favoriteSongs={favoriteSongs} />
                    })
                    : <h2>Please search for a track</h2>
                }
            </StyledSongList>
        </div>
    )
}