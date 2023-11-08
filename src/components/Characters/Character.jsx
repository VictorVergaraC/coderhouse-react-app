
const Character = ({ name, image }) => {
    return (
        <div className="border border-3 rounded-3 p-3 d-flex flex-column m-2">
            <h6>Nombre: {name}</h6>
            <img className="my-1" src={image} alt={name}/>
            <button className="my-1">Detalle</button>
        </div>
    );
}

export default Character;

