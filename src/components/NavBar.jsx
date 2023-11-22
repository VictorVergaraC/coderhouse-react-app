import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (

        <div className='bg-dark p-5'>
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <div className='d-flex justify-content-between'>
                    <Link to="/category/ropa"></Link>
                    <Link to="/category/calzado"></Link>
                    <Link to="/category/accesorios"></Link>
                </div>
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;
