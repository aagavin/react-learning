import React from 'react';

const CharComponent = props => {

    const style = {
        "display": "inline-block",
        "padding": "16px",
        "text-align": "center",
        "margin": "16px",
        "border": "1px solid black"
    }

    return (
        <div onClick={() => props.click(props.index)} style={style}><p>{props.text}</p></div>
    )

};

export default CharComponent;