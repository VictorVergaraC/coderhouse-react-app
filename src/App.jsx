import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";

const App = () => {

  const objMessage = { message: 'Hola mundo desde App.jsx' }

  return (
    <>
      <NavBar/>
      <ItemListContainer props={objMessage}/>
    </>
  );
}

export default App;

