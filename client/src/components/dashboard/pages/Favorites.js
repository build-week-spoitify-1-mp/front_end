import React from 'react'

// Style
import styled from 'styled-components'
import { accent_main } from '../../theme'

// Components
import SongCard from '../SongCard'

const FavoritesPage = styled.div`
    h2 {
        text-align: center;
        color: ${accent_main};
        font-weight: 900;
    }
    .favorites-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

const Favorites = props => {
    return (
        <FavoritesPage>
            <h2>Favorites</h2>
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