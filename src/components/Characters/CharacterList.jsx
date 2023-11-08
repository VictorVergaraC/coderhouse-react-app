import Character from './Character';

const CharacterList = ({ characters }) => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            { characters.map(character => <Character key={character.id} name={character.name} image={character.image}/>) }
        </div>
    );
}

export default CharacterList;
