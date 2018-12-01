import React from 'react';

const validationComponent = props => {

    const textShort = props.textLenght <= 6 ? true : false;

    let textMessage = null;

    if (textShort) {
        textMessage = (<p>Text to too text</p>)
    } else {
        textMessage = (<p>Text long enough</p>)
    }

    return (<div>{textMessage}</div>)
}

export default validationComponent;