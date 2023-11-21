import { Link } from "react-router-dom";

const CharacterDetail = ({ name, species, Location, image, gender }) => {
    return (
        <div className="p-5 border border-3 rounded-4">
            <div className="d-flex justify-content-center">
                <img src={image} alt={name} />
            </div>
            <div className="d-flex flex-column">
                <p>Nombre: {name}</p>
                <p>Especie: {species}</p>
                <p>Género: {gender}</p>
                <p>Planeta: {Location.name}</p>
            </div>
            <Link to="/">
                <button className="btn btn-dark btn-sm">Volver</button>
            </Link>
        </div>
    );
}

export default CharacterDetail;
