import React, { useEffect, useState } from "react";
import Product from "./Product";

const Cart = ({ cart, setCart }) => {
  const[total, setTotal]= useState()
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price), 0));
  }, [])
  console.log(cart);
  return (
    <div>
      {cart.map((prod) => (
              <Product
                key={prod.id}
                prod={prod}
                cart={cart}
                setCart={setCart}
              />
            ))}
      <span>My Cart : 0</span>
      <span>Total : {total}</span>
      <div className="productlist">
        <div className="container-fluid">
          <div className="row">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
