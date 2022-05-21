import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";


const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {name : "Cappuccino", price : 60.00, id : 1, image:'assets/cappuccino.jpg', instock:4, qty : 4},
    {name : "Burger", price : 120.00, id : 2, image:'assets/burger.jpg', instock : 3, qty : 3},
    {name : "FundaCool", price : 90.00, id : 3, image:'assets/buy1get1funda.jpg', instock : 10, qty : 10},
    {name : "Coffee Snack", price : 150.00, id : 4, image:'assets/coffee-snack.jpg', instock : 7, qty : 7},
    {name : "CoolFour", price : 150.00, id : 5, image:'assets/coolfour.jpg', instock : 15, qty : 15},
    {name : "Coffe Mix Combo", price : 200.00, id : 6, image:'assets/Coffethree.jpg', instock : 5, qty : 5},
  ]
  const [state, dispatch] = useReducer(cartReducer,{
    products:products,
    cart:[],
  })
  // console.log(cart);

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;