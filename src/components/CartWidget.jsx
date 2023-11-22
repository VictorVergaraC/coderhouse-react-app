import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="d-flex p-1">
            <button title='Ir al Carrito' className='btn btn-outline-danger d-flex gap-2 align-items-center'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>5</span>
            </button>
        </div>
    );
}

export default CartWidget;
