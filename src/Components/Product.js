import React from "react";
import { CartState } from '../Context/Context';

// const Product = ({prod, cart, setCart}) => {
  const Product = ({prod}) => {
    const { state:{cart},
    dispatch,
   } = CartState();
   console.log(cart);
  return (
    <div className="col col-md-4 col-sm-6 col-lg-3" key={prod.id}>
      <div className="showcase">
        <figure>  
        <img src={prod.image} alt={prod.name}></img>
        </figure>
        <div className="desc">
          <h2>{prod.name}</h2>
          <h3>Price : {prod.price}</h3>
          {cart.some(p=>p.id===prod.id) ? (
            <button onClick={() => {
              dispatch({
                type:"removeFromCart",
                payload:prod,
              })
            }}>Remove from Cart</button>
          ):(
            <button onClick={() => {
              dispatch({
                type:"addToCart",
                payload:prod,
              })
            }}>Add to Cart</button>
            )}
   
        </div>
      </div>
    </div>
  );
};

export default Product
