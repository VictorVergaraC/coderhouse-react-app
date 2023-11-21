const Task = ({ id, status, task, changeStatus, deleteTask }) => {
    return (
        <div className="d-flex col mt-2 p-2 align-items-center justify-content-between border border-2 rounded">
            <p style={ status ? { textDecoration: "line-through" } : {}}>{task}</p>
            <div>
                <button onClick={() => changeStatus(id)} className="btn btn-sm btn-success m-1">Realizado</button>
                <button onClick={() => deleteTask(id)} className="btn btn-sm btn-danger m-1">Eliminar</button>
            </div>
        </div>
    );
}

export default Task;
