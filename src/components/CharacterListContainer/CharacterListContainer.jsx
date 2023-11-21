import CharacterList from '../CharacterList/CharacterList';
import Button from '../Buttons/Button';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { useCount } from '../../hooks/useCount';

const CharacterListContainer = () => {

    const { status } = useParams()

    const { count, increment, decrement } = useCount(1)

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?page=${count}${status ? '&status=' + status : ''}`)

    return (
        
        <div className='container d-flex flex-column align-items-center'>
            {isLoading ? <h2>Cargando ...</h2> : <CharacterList characters={data.results} />}
            <div className="mt-2 d-flex justify-content-center align-items-center">
                <Button disabled={count <= 1} name={'Atrás'} action={increment} class={'btn btn-primary btn-sm m-2'} />
                <strong>Página: {count}</strong>
                <Button disabled={count >= 42} name={'Sig.'} action={decrement} class={'btn btn-success btn-sm m-2'} />
            </div>
        </div>
    );
}

export default CharacterListContainer;
