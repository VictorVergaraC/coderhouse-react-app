import React from 'react';

const Button = ({ name, action }) => {
    return (
        <button className='btn btn-primary btn-sm m-2' onClick={action}>{name}</button>
    );
}

export default Button;
