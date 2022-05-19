import { createContext, useContext, useState } from "react";


const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const products = [
    {name : "Cappuccino", price : 60.00, id : 1, image:'assets/coffee-latte.jpg'},
    {name : "Americano", price : 70.00, id : 2, image:'assets/coffee-latte.jpg'},
    {name : "Cafe Mocha", price : 60.00, id : 3, image:'assets/coffee-latte.jpg'},
    {name : "Vanilla Latte", price : 65.00, id : 4, image:'assets/coffee-latte.jpg'},
    {name : "Espresso", price : 80.00, id : 5, image:'assets/coffee-latte.jpg'},
    {name : "Caffe Latte", price : 70.00, id : 6, image:'assets/coffee-latte.jpg'},
  ]
  const [productItems] = useState(products);
  console.log(cart);

  return (
    <Cart.Provider value={{ cart, setCart, productItems }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;