import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import TaskList from "../TaskList/TaskList";

const TaskListContainer = () => {

    const [tasks, setTasks] = useState([]);

    const hanldeAddTask = task => setTasks([...tasks, task])

    const handleChangeStatus = id => {
        const filterTask = tasks.findIndex(task => task.id === id)

        const copyTasks = [...tasks]

        copyTasks[filterTask] = {
            ...copyTasks[filterTask],
            status : !copyTasks[filterTask].status
        }

        setTasks([...copyTasks])

    }

    const hanldeDeleteTask = id => {
        const filterTasks = tasks.filter(task => task.id !== id)

        setTasks([...filterTasks])
    }

    return (
        <div className="d-flex flex-column col-6">
            <FormInput addTask={hanldeAddTask}/>
            <TaskList tasks={tasks} changeStatus={handleChangeStatus} deleteTask={hanldeDeleteTask}/>
        </div>
    );
}

export default TaskListContainer;
