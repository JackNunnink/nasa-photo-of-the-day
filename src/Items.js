import React from "react";
import styled from 'styled-components';

const ItemsStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};

    header {
        text-align: center;
        background-color: ${props => props.theme.secondaryColor};
    }

    .details {
        text-align: center;
        margin: 5%;
    }

    .details h3 {
        padding: 8px;
    }

    .details p {
        border: 2px solid ${props => props.theme.highlightColor};
        border-radius: 20px;
        padding: 8px;
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

    @media ${props => props.theme.breakpointDesktop} {
        height: 100vh;
    }
`

const Item = (props) => {
    return (
        <ItemsStyled className="item-container">
            <header>
                <h1>Welcome to Nasa's photo of the day!</h1>
            </header>
            <div className="details">
                <h3>{props.item.title}</h3>
                <p>Taken by: {props.item.copyright}</p>
                <p>{props.item.date}</p>
                <p>{props.item.explanation}</p>
            </div>
            <button onClick={() => props.openPhoto(props.item.hdurl)}>
                See Photo
            </button>
        </ItemsStyled>
    )
}

export default Item;