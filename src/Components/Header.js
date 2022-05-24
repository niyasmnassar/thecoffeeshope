import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../logoshope.png";
import cartIcon from "./../bag.png";
import { CartState } from "../Context/Context";
import Trash from "../trash.svg";
import {
  Navbar,
  Container,
  Dropdown,
  Button
} from "react-bootstrap";
import { useState } from "react";

export const Header = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname])

  const Menu = ({ open }) => {
    return (
      <nav className="main-nav" open={open}>
        <Link to="/About">
        About us
        </Link>
        <Link to="/Menu">
        Restaurant Menu
        </Link>
        <Link to="/Contact">
        Contact
        </Link>
      </nav>
    );
  };

  const Burger = ({ open, setOpen }) => {
    return (
      <button className="harmburger" open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </button>
    );
  };

  return (
    <div>
      <header className="App-header">
        <Navbar className="mb-3">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="restaurant logo"></img>
            </Navbar.Brand>

            <Dropdown className="customized ml-auto">
              <Dropdown.Toggle variant="success">
                <div className="menu-cart">
                  <div className="menu-cart-icon">
                    <img src={cartIcon} alt="cartIcon"></img>
                  </div>
                  <div className="menu-cart-item-count">({cart.length})</div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="cart-drp" align="start" id="dropdown-menu-align-start">
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
                        <button onClick={()=>dispatch({
                        type:"removeFromCart",
                        payload: prod,
                      })} className="del-cart"><img src={Trash} alt="delete"></img></button>
                      </div>
                    ))}
                    <Link to="/cart">
                      <Button className="gocart">Go To Cart</Button>
                    </Link>
                  </>
                ) : (
                  <span className="d-flex justify-content-center">
                    Cart Empty !
                  </span>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </Container>
        </Navbar>
      </header>
    </div>
  );
};
