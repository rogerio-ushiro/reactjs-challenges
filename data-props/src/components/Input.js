import React from 'react';

export const Input = (props) => {

    const handleChange = event => {
        props.updateText(event.target.value)
    };

    return (
        <input type="text" value={props.value} onChange={handleChange} />
    );
}