import { useEffect, useState } from 'react';
import CharacterList from '../CharacterList/CharacterList';
import Button from '../Buttons/Button';

const CharacterListContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const getCharacters = async () => {
        try {

            const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            const data = await resp.json()

            setCharacters(data.results)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
        }
    }

    const handleNextPage = () => {
        setPage(
            page < 42
            ? page + 1
            : page
        )
    }

    const handlePrevPage = () => {
        setPage(
            page > 1
            ? page - 1
            : page
        )
    }

    useEffect(() => {
        getCharacters()

        return () => {
            setCharacters([])
            setIsLoading(true)
        }

    }, [page]);

    return (
        <div className="m-2">
            {
                isLoading
                ? (
                    <h6>Cargando personajes ...</h6>
                )
                : (
                    <>
                    <CharacterList characters={characters}/>
                    <div className="d-flex justify-content-center align-items-center">
                        <Button disabled={page <= 1} name={'Atrás'} action={handlePrevPage} class={'btn btn-primary btn-sm m-2'}/> 
                        <strong>Página: {page}</strong>
                        <Button disabled={page >= 42} name={'Sig.'} action={handleNextPage} class={'btn btn-success btn-sm m-2'}/>
                    </div>
                    </>
                )
            }
        </div>
    );
}

export default CharacterListContainer;
