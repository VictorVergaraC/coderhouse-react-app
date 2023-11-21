import React from 'react';

const Button = ({ name, action, clase = "btn btn-outline-secondary btn-sm m-2", disabled = false }) => {
    return (
        <button disabled={disabled} className={clase} onClick={action}>{name}</button>
    );
}

export default Button;
