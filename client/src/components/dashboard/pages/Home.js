import React, { useState, useEffect } from 'react'
import { axiosSpotify } from '../../../utils/axiosSpotify'

const trackID = '5dalRkw5u1HTeFwfJQSDLz'

const getTrack = () => [
    axiosSpotify()
        .get(`/tracks/${trackID}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {console.log(error)})
]

const Home = props => {

    useEffect(() => {
        getTrack()
    }, [])

    return (
        <div className='home'>
            <p>You've hit the home page</p>
        </div>
    )
}

export default Home