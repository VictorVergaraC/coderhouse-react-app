import { useState } from 'react';
import { v4 as uuid } from 'uuid'

const FormInput = ({ addTask }) => {

    const [task, setTask] = useState("");

    const handleInput = evt => setTask(evt.target.value)
    
    const handleFormSubmit = evt => {
        evt.preventDefault()

        const newTask = {
            id : uuid(),
            task,
            status: false
        }

        addTask(newTask)
        setTask("")
    }

    return (
        <form className='d-flex col' onSubmit={handleFormSubmit}>
            <input
                type='text'
                className='form-control border border-2 border-black'
                placeholder='Ingresa el texto aquí'
                onChange={handleInput}
                value={task}
            />
            <input
                type='submit'
                className='btn btn-primary m-2'
                value='Agregar'
            />
        </form>
    );
}

export default FormInput;
