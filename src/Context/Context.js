import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";


const Cart = createContext();

const Context = ({ children }) => {

  const products = [
    {name : "Cappuccino", price : 60.00, id : 1, image:'assets/cappuccino.jpg',},
    {name : "Burger", price : 120.00, id : 2, image:'assets/burger.jpg',},
    {name : "FundaCool", price : 90.00, id : 3, image:'assets/buy1get1funda.jpg',},
    {name : "Coffee Snack", price : 150.00, id : 4, image:'assets/coffee-snack.jpg',},
    {name : "CoolFour", price : 150.00, id : 5, image:'assets/coolfour.jpg',},
    {name : "Coffe Mix Combo", price : 200.00, id : 6, image:'assets/Coffethree.jpg', },
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