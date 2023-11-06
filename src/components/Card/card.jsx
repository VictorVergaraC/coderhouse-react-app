const Card = ({ name, description, stock }) => {
    return (
        <div className='card m-2 p-3'>
            <h5>{name}</h5>
            <p>{description}</p>

            <div>
                <button className="btn btn-sm btn-success">Agregar</button>
            </div>
        </div>
    );
}

export default Card;
