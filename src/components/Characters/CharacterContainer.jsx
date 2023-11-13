import { useEffect, useState } from "react"
import CharacterList from "./CharacterList";
import Button from "../Buttons/Button";

const CharacterContainer = () => {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const getCharacters = async () => {
        try {

            const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            const data = await resp.json()

            console.log(data.results)
            setCharacters(data.results)
            setIsLoading(false)

        } catch( error) {
            console.log(error)
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
                        { page > 1 && <Button name={'Atrás'} action={handlePrevPage} class={'btn btn-primary btn-sm m-2'}/> }
                        <strong>Página: {page}</strong>
                        { page < 42 && <Button name={'Sig.'} action={handleNextPage} class={'btn btn-success btn-sm m-2'}/> }
                    </div>
                    </>
                )
            }
        </div>
    );
}

export default CharacterContainer;
