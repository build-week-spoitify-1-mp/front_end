import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosSpotify } from '../../../utils/axiosSpotify'

// Components
import SongCard from '../SongCard'

// Style
import styled from 'styled-components'
import { accent_main } from '../../theme'

const StyledSearchList = styled.div`
    h2 {
        text-align: center;
        color: ${accent_main};
        font-weight: 900;
    }
    .search-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
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
        <StyledSearchList>
            <h2>Search Results</h2>
                <div className='search-list'>
                {
                    query !== ''
                    ? songList.map(song => {
                        return <SongCard key={song.id} song={song} changeHistory={props.changeHistory}/>
                    })
                    : <p>Please search for a song or artist</p>
                }
            </div>
         </StyledSearchList>
    )
}

export default Search