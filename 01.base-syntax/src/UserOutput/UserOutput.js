import React from "react";

const userOutput = props => {

    const style = {
        backgroundColor: '#fefefe',
        border: '1px solid #ddd',
        borderRadius: '1rem',
        padding: '2em',
        margin: '1em'
    }

    return (
        <div style={style}>
            <p>
                This is a test <br />
                {props.username}
            </p>

            <p>
                This is another text <br />
                {props.text2}
            </p>
        </div>
    )
}

export default userOutput;