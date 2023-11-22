import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
import ProductDetailContainer from "./components/productDetailContainer";
import ProductsFilterContainer from "./components/productsFilterContainer";

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <main className="m-5 p-2">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/product/:idProduct" element={<ProductDetailContainer/>} />
          <Route path="/category/:category" element={<ProductsFilterContainer/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

