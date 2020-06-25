import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosSpotify } from '../../../utils/axiosSpotify'
import axios from 'axios'

const Suggestions = props => {
    const [songID, setSongID] = useState()
    const [song, setSong] = useState()
    const [suggestions, setSuggestions] = useState()

    let trackid = useParams().trackid

    useEffect(() => { // Set song id
        if(!trackid) {
            setSongID(props.lastFaveTrackID.trackid)
        } else {
            setSongID(trackid)
        }
    }, [trackid, props.lastFaveTrackID])

    useEffect(() => { // Get base song data
        axiosSpotify()
            .get(`/tracks/${songID}`)
            .then(response => {
                console.log(response)
                setSong(response.data)
            })
            .catch(error => {console.log(error)})
    }, [songID, trackid])



    return (
        <div className='suggestions'>
            <h3>Suggestions</h3>
            <div className="main-song">
            </div>
            <div></div>

        </div>
    )
}

export default Suggestions