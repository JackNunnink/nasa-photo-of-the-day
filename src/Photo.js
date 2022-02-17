import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Photo(props) {
    const { photoUrl, close } = props
    const [ photo, setPhoto ] = useState(null)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=L42Xqk3WgbNnupggmdDsHRXYtyU5Jf5sTFrlD0CO&date=2012-03-14`)
            .then(res => {
                setPhoto(res.data)
            }).catch(err => console.error(err))
    }, [photoUrl])

    return (
        <div className='container'>
            {
                photo && 
                <>
                    <img src={photo.hdurl} alt="sun spot" />
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}