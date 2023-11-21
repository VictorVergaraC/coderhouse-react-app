import { useEffect, useState } from "react";
import CharacterDetail from "../CharacterDetail/CharacterDetail";

const CharacterDetailContainer = () => {

    const [character, setCharacter] = useState(null);

    const getCharacter = async (id) => {

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setCharacter(data)
            console.log(data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        
        getCharacter(1)

        return () => { };
    }, []);

    return (
        <div className="container d-flex justify-content-center m-5">
            { character && <CharacterDetail {...character} /> }
        </div>
    );
}

export default CharacterDetailContainer;

