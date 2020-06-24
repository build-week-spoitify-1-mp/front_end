import React, { useState, useEffect } from 'react'

// Utils
import { axiosSpotify } from '../../../utils/axiosSpotify'

const trackID = '5dalRkw5u1HTeFwfJQSDLz'



const Home = props => {
    const [songs, setSongs] = useState([])

    return (
        <div className='home'>
            <h3>Favorite tracks</h3>
            <div className='favorite-list'>
                
            </div>
        </div>
    )
}

export default Home