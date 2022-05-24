import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ProductList/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
