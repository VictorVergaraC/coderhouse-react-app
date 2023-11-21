import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterListContainer from "./components/CharacterListContainer/CharacterListContainer";
import CharacterDetailContainer from "./components/CharacterDetailContainer/CharacterDetailContainer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CharacterListContainer/>}/>
        <Route path="/characters/:status" element={<CharacterListContainer/>}/>
        <Route path="/character/:id" element={<CharacterDetailContainer/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

