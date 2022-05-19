import React from "react";
import { Link } from "react-router-dom";
import logo from "./../logoshope.png";
import cartIcon from "./../bag.png";
import { CartState } from "../Context";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Dropdown,
  Button
} from "react-bootstrap";
import { useState } from "react";

export const Header = () => {
  const { cart } = CartState();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const Menu = ({ open }) => {
    return (
      <nav className="main-nav" open={open}>
        <a href="/">
          <span role="img" aria-label="about us"></span>
          About us
        </a>
        <a href="/">
          <span role="img" aria-label="price"></span>
          Pricing
        </a>
        <a href="/">
          <span role="img" aria-label="contact"></span>
          Contact
        </a>
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
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="restaurant logo"></img>
            </Navbar.Brand>
            <Dropdown className="customized">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="menu-cart">
                  <div className="menu-cart-icon">
                    <img src={cartIcon} alt="cartIcon"></img>
                  </div>
                  <div className="menu-cart-item-count">({cart.length})</div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link to="/cart">
              <Button style={{ width: "95%", margin: "0 10px" }}>
                Go To Cart
              </Button>
            </Link>

            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </Container>
        </Navbar>
      </header>
    </div>
  );
};
