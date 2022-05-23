import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Trash from "../trash.svg";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const taxDefault = 1.5;
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price + (taxDefault)) * curr.qty, 0)
    );
  }, [cart]);
  console.log(cart);
  return (
    <div>
      <div className="productlist">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <div className="cart-list" key={prod.id}>
                      <figure>
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="img-fluid"
                        ></img>
                      </figure>
                      <div className="cart-info">
                        <span>{prod.name}</span>
                        <span>{prod.price}</span>
                      </div>

                      <div className="col-md-2">
                      <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "changeCartQuantity",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                      
                      </div>
                      
                      
                      <button
                        onClick={() =>
                          dispatch({
                            type: "removeFromCart",
                            payload: prod,
                          })
                        }
                        className="del-cart"
                      ><img src={Trash} alt="delete"></img></button>
                    </div>
                  ))}
                </>
              ) : (
                <span className="d-flex justify-content-center">
                  Cart is Empty !
                </span>
              )}
            </div>
            <div className="col-md-3 summary">
              <div className="wrap">
                <span>Subtotal {cart.length} items</span>
                <span>Total : &#8377;{total} <span>(Inclusive of all Taxes)</span></span>
                <button className="checkout-btn" disabled={cart.length === 0}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
