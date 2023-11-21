import Button from "../Buttons/Button";
import Count from "../Count/Count";

const Card = ({ name, description, stock }) => {
    return (
        <div className='card m-2 p-3'>
            <h5>{name}</h5>
            <p>{description}</p>

            <div>
                {/* <button className="btn btn-sm btn-success">Agregar</button> */}
                <Count max={stock}/>
                <Button name="Agregar" action={() => {}} clase="btn btn-success btn-sm m-2"/>
            </div>
        </div>
    );
}

export default Card;
