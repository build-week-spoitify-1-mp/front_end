import React, { useState, useEffect } from 'react'

// Style
import styled from 'styled-components'

// Components
import SongCard from '../SongCard'

const FavoritesPage = styled.div`

    .favorites-list {
        display: flex;
        flex-wrap: wrap;
    }
`

const Favorites = props => {
    return (
        <FavoritesPage>
            <h3>Favorites</h3>
            <div className='favorites-list'>
                {
                    props.songData.map(song => {
                        return <SongCard key={song.id} song={song} />
                    })
                }
            </div>
        </FavoritesPage>
    )
}

export default Favorites