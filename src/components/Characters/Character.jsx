import { Link } from "react-router-dom";

const Character = ({ id, name, image }) => {
    return (
        <div className="border border-3 rounded-3 p-3 d-flex flex-column m-2">
            <h6>Nombre: {name}</h6>
            <img className="my-1" src={image} alt={name} />
            <Link to={`/character/${id}`}>
                <button className="my-1 btn-sm">Detalle</button>
            </Link>
        </div>
    );
}

export default Character;

