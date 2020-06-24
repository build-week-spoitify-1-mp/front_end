import React, { useEffect } from 'react'
import { getAuth } from '../utils/getAuth'
import { axiosSpotify } from '../utils/axiosSpotify'

export default function Recommended(props) {
    const { favoriteSongs } = props

    useEffect(() => {
        getAuth()
    }, [])

    useEffect(() => {
        const getSeedTrackIds = () => {
            debugger
            const seedTrackIdsArray = favoriteSongs.map(song => {
                if (seedTrackIdsArray.length < 5){
                    return song.id
                }
                return null
            })
    
            return seedTrackIdsArray.join(',')
        }
        
        axiosSpotify()
            .get(`/recommendations?seed_tracks=${getSeedTrackIds}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => { 
                console.log('There be an error', err)
            })
    }, [favoriteSongs])
    
    return (
        <div>
            Recommended
        </div>
    )
}