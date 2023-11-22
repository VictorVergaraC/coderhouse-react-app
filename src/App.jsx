import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";

const App = () => {

  const objMessage = { message: 'Hola mundo desde App.jsx' }

  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer props={objMessage} />
    </BrowserRouter>
  );
}

export default App;

