import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { Header } from "./Components/Header";
import Offer from "./Components/Offer";
import ProductList from "./Components/ProductList";
import { useState } from "react";

function App() {
  const [cart,setCart] = useState([])
  return (
    <BrowserRouter>
      <Header />
      <Offer />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ProductList cart={cart} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
