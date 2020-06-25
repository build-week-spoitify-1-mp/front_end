import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosSpotify } from '../../../utils/axiosSpotify'

// Components
import SongCard from '../SongCard'

// Style
import styled from 'styled-components'

const StyledSearchList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Search = props => {
    let query = useParams().query;
    const [songList, setSongList] = useState([])

    useEffect(() => {
        axiosSpotify()
            .get(`/search?q=${query}&type=track`)
            .then(response => {
                setSongList(response.data.tracks.items)
            })
            .catch(error => {console.log(error)})
    }, [query])

    return (
        <div>
            <h3>Search</h3>
            <StyledSearchList>
                {
                    query !== ''
                    ? songList.map(song => {
                        return <SongCard key={song.id} song={song} changeHistory={props.changeHistory}/>
                    })
                    : <p>Please search for a song or artist</p>
                }
            </StyledSearchList>
        </div>
    )
}

export default Search