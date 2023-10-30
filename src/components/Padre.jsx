import Hijo from './Hijo';

const Padre = () => {
    return (
        <>
            <div>Componente Padre</div>
            <Hijo mensaje="Hola hijo" mesada={10000}/>
        </>
    );
}

export default Padre;
