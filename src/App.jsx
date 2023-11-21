import TaskListContainer from "./components/TaskListContainer/TaskListContainer";

const App = () => {

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1>Task App</h1>
      <TaskListContainer />
    </div>
  );
}

export default App;

