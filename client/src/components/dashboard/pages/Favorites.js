import React, { useState, useEffect } from 'react'

// Style
import styled from 'styled-components'
import { accent_main } from '../../theme'

// Components
import SongCard from '../SongCard'

const FavoritesPage = styled.div`
    h3 {
        text-align: center;
        color: ${accent_main};
        font-weight: 900;
    }
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
                        return <SongCard key={song.id} song={song} changeHistory={props.changeHistory}/>
                    })
                }
            </div>
        </FavoritesPage>
    )
}

export default Favorites