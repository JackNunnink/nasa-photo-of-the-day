import React from "react";

const Item = (props) => {
    return (
        <div className="item-container">
            <h3>{props.item.title}</h3>
            <p>Taken by: {props.item.copyright}</p>
            <p>{props.item.date}</p>
            <p>{props.item.explanation}</p>
            <button onClick={() => props.openPhoto(props.item.hdurl)}>
                See Photo
            </button>
        </div>
    )
}

export default Item;