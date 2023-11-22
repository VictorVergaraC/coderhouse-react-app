import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
import ProductDetailContainer from "./components/productDetailContainer";

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <main className="m-5 p-2">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/product/:idProduct" element={<ProductDetailContainer/>} />
          <Route path="/category/:ropa" />
          <Route path="/category/:calzado" />
          <Route path="/category/:accesorios" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

