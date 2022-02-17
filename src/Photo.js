import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled, { keyframes } from "styled-components";

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const StyledPhoto = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: scale(2);
    animation: ${kf} 2s ease-in-out forwards;
    
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.primaryColor};

    img {
        width: 80%;
        margin: 10%;
    }

    footer {
        text-align: center;
        background-color: ${props => props.theme.secondaryColor};
    }

    button {
        background-color: ${props => props.theme.buttonColor};
        width: 200px;
        height: 70px;
        color: ${props => props.theme.textColor};
        font-size: 20px;
        border-radius: 20px;
        border: none;
        margin: 5%;
    }
`

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
        <StyledPhoto className='container'>
            {
                photo && 
                <>
                    <img src={photo.hdurl} alt="sun spot" />
                </>
            }
            <button color="buttonColor" onClick={close}>Close</button>
            <footer>
                <h4>Contact Us!</h4>
            </footer>
        </StyledPhoto>
    )
}