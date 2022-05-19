import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../bras1.png";
import cartIcon from "./../bag.png";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Dropdown
} from "react-bootstrap";
import { useState } from "react";

export const Header = () => {
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
                  <div className="menu-cart-item-count">{}</div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
