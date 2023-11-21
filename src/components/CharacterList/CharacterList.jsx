import Character from "../Characters/Character";

const CharacterList = ({ characters }) => {

    return (
        <div className='d-flex flex-sm-wrap justify-content-center'>
            { characters.map(character => <Character key={character.id} {...character}/>) }
        </div>
    );
}

export default CharacterList;
