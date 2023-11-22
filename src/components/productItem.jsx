import { Link } from "react-router-dom";

const ProductItem = ({ id, name, precio }) => {
    return (
        <article className="d-flex flex-column border border-3 rounded-3 p-3 m-2">
            <h6>{name}</h6>
            <p>${precio}</p>
            <Link to={`/product/${id}`}>
                <button className="btn btn-dark btn-sm my-2">Detalle</button>
            </Link>
        </article>
    );
}

export default ProductItem;
