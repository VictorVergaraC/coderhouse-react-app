import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (

        <section className='bg-dark p-3'>
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <button title='Volver al Home' className='btn btn-dark d-flex gap-3 align-items-center'>
                        <FontAwesomeIcon icon={faShop} /> Mi Tienda
                    </button>
                </Link>
                <div className='d-flex justify-content-between'>
                    <Link to="/category/ropa">
                        <button className='btn btn-dark'>Ropa</button>
                    </Link>
                    <Link to="/category/calzado">
                        <button className='btn btn-dark'>Calzado</button>
                    </Link>
                    <Link to="/category/accesorios">
                        <button className='btn btn-dark'>Accesorios</button>
                    </Link>
                </div>
                <CartWidget />
            </div>
        </section>
    );
}

export default NavBar;
