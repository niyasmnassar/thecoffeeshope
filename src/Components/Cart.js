import { useEffect, useState } from "react";
import { CartState } from "../Context";
import Product from "./Product";

// const Cart = ({ cart, setCart }) => {
  const Cart = () => {
  const { cart } = CartState();
  const [total, setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  console.log(cart);
  return (
    <div>
      <span>My Cart : 0</span>
      <span>Total : {total}</span>
      <div className="productlist">
        <div className="container-fluid">
          <div className="row">
          {cart.map((prod) => (
              <Product
                key={prod.id}
                prod={prod}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
