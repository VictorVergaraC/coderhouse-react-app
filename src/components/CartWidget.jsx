import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="d-flex">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <div className='bg-danger rounded'>
                <span className="badge">5</span>
            </div>
        </div>
    );
}

export default CartWidget;
