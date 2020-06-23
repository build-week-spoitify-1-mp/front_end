import React, { useState, useEffect } from 'react'
import SongCard from './SongCard'
import { axiosSpotify } from '../utils/axiosSpotify'
import { getAuth } from '../utils/getAuth'

export default function SongSearch(props) {
    const [searchQuery, setSearchQuery] = useState('')
    const [queryString, setQueryString] = useState('')
    const [songList, setSongList] = useState([])
    
    const onSearchQueryChange = e => {
        const newQuery = e.target.value
        setSearchQuery(newQuery)
    }

    const onSearchSubmit = e => {
        setQueryString(searchQuery.trim().split(" ").join("+"))
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
            <input 
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={onSearchQueryChange}
            />&nbsp;
            <button onClick={onSearchSubmit}>Search</button>
            
            <ul>
                {
                    queryString !== ''
                    ? songList.map(song => {
                        return <SongCard key={song.id} song={song} />
                    })
                    : <p>Please search for a song or artist</p>
                }
            </ul>
        </div>
    )
}