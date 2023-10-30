import { useState } from 'react';

const HookUseState = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count => (count > 0) ? count - 1 : count)

    return (
        <>
            <h3>Contador: {count}</h3>
            <button className='mx-1' onClick={increment}>Sumar</button>
            <button className='mx-1' onClick={decrement}>Restar</button>
            { count >  0 &&
                <button className='mx-1' onClick={() => setCount(0)}>Resetear</button>
            }
        </>
    );
}

export default HookUseState;
