import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosSpotify } from '../../../utils/axiosSpotify'
import axios from 'axios'

// Style
import styled from 'styled-components'
import { accent_main } from '../../theme'

// Components
import SongCard from '../SongCard'

const SuggestionsPage = styled.div`
    h2 {
        text-align: center;
        color: ${accent_main};
        font-weight: 900;
    }
    .reccomend-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

const Suggestions = props => {
    const [songID, setSongID] = useState()
    const [song, setSong] = useState({name: '', artists: []})
    const [suggestions, setSuggestions] = useState([])

    let trackid = useParams().trackid

    useEffect(() => { // Set song id
        if(!trackid) {
            setSongID(props.lastFaveTrackID.trackid)
        } else {
            setSongID(trackid)
        }
    }, [trackid, props.lastFaveTrackID])

    useEffect(() => { // Get base song data
        if(songID){
            axiosSpotify()
            .get(`/tracks/${songID}`)
            .then(response => {
                // console.log(response)
                setSong(response.data)
            })
            .catch(error => {console.log(error)})
        }
    }, [songID])

    useEffect(() => {
        if(songID) {
            axiosSpotify()
                .get(`/recommendations?seed_tracks=${songID}`)
                .then(res => {
                    // console.log(res.data.tracks)
                    setSuggestions(res.data.tracks)
                })
                .catch(err => { 
                    console.log('There be an error', err)
                })
        }
    }, [songID])


    return (
        <SuggestionsPage>
            <h2>Suggestions for {songID ? song.name: ''}</h2>
            <div className="main-song">
                
            </div>
            <div className="reccomend-list">
                {
                    suggestions.map(song => {
                        return <SongCard key={song.id} song={song} changeHistory={props.changeHistory}/>
                    })
                }
            </div>
        </SuggestionsPage>
    )
}

export default Suggestions