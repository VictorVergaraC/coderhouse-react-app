import React from 'react';

const ItemListContainer = ({props}) => {

    console.log(props)

    return (
        <div className='my-2 mx-5'>
            <h3>Item List Container</h3>
            <div className='my-2'>
                <h5>Mensaje: { props.message }</h5>
            </div>
        </div>
    );
}

export default ItemListContainer;
