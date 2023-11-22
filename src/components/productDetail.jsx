import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDetail = ({ id, name, descripcion, categoria, precio, stock }) => {

    return (
        <div className="d-flex flex-column align-items-center border border-3 rounded-3 p-3 m-2">
            <div className="my-2">
                <img src="" alt="Imagen no disponible" />
            </div>
            <h2>{name}</h2>
            <p>Categoria: {categoria}</p>
            {
                stock <= 3 && (
                    <div className="col-2 my-1">
                        <span className="badge bg-danger">Últimas unidades!</span>
                    </div>
                )
            }
            <p>${precio}</p>
            <div className="my-2">
                <button className="btn btn-success btn-sm d-flex gap-2 p-1 align-items-center">
                    <FontAwesomeIcon icon={faPlus}/>
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;
