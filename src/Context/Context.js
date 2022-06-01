import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";


const Cart = createContext();

const Context = ({ children }) => {

  const products = [
    {name : "Cappuccino", price : 60.00, id : 1, image:'assets/cappuccino.jpg', quantity: 1},
    {name : "Burger", price : 120.00, id : 2, image:'assets/burger.jpg', quantity: 1},
    {name : "FundaCool", price : 90.00, id : 3, image:'assets/buy1get1funda.jpg', quantity: 1},
    {name : "Coffee Snack", price : 150.00, id : 4, image:'assets/coffee-snack.jpg', quantity: 1},
    {name : "CoolFour", price : 150.00, id : 5, image:'assets/coolfour.jpg', quantity: 1},
    {name : "Coffe Mix Combo", price : 200.00, id : 6, image:'assets/Coffethree.jpg', quantity: 1},
  ]
  const [state, dispatch] = useReducer(cartReducer,{
    products:products,
    cart:[],
  })
  console.log(products);

  return (
    <Cart.Provider value={{ state, dispatch, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;