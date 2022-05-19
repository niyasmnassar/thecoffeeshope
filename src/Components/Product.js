import React from "react";
import { CartState } from './../Context'

// const Product = ({prod, cart, setCart}) => {
  const Product = ({prod}) => {
    const { cart, setCart } = CartState();
  return (
    <div className="col col-md-4 col-lg-3" key={prod.id}>
      <div className="showcase">
        <figure>  
        <img src={prod.image} alt={prod.name}></img>
        </figure>
        <div className="desc">
          <h2>{prod.name}</h2>
          <h3>Price : {prod.price}</h3>
          {cart.includes(prod) ? (
            <button onClick={() => {
              setCart(cart.filter((c) => c.id !== prod.id))
            }}>Remove from Cart</button>
          ):(
            <button onClick={() => {
              setCart([...cart, prod])
            }}>Add to Cart</button>
            )}
   
        </div>
      </div>
    </div>
  );
};

export default Product
