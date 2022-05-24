import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="base-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center blend-title">Welcome Back to TheCoffeeShope</h2>


            <div className="menu">
              <div className="list">
                <h2 className="list-title">Coffee / Tea</h2>
                <ul>
                  <li className="item"><span className="name">Cappuccino</span>
                    <span className="price">60</span>
                  </li>
                  <li className="item"><span className="name">Coffee Latte</span>
                    <span className="price">55</span>
                  </li>
                  <li className="item"><span className="name">Masala or Ginger Tea</span>
                    <span className="price">15</span>
                  </li>
                  <li className="item"><span className="name">Elaichi Core Tea</span>
                    <span className="price">20</span>
                  </li>
                  <li className="item"><span className="name">Mint Tea</span>
                    <span className="price">10</span>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h2 className="list-title">Sandwiches</h2>
                <ul>
                  <li className="item"><span className="name">Chicken Sandwich</span>
                    <span className="price">40</span>
                  </li>
                  <li className="item"><span className="name">Veggy Sandwich</span>
                    <span className="price">30</span>
                  </li>
                  <li className="item"><span className="name">Beef Sandwich</span>
                    <span className="price">55</span>
                  </li>
                  <li className="item"><span className="name">Turkey Sandwich</span>
                    <span className="price">45</span>
                  </li>
                  <li className="item"><span className="name">Sausage</span>
                    <span className="price">14</span>
                  </li>
                  <li className="item"><span className="name">Tipsy Texan</span>
                    <span className="price">14</span>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h2 className="list-title">Burger</h2>
                <ul>
                  <li className="item"><span className="name">Crispy Chicken Burger</span>
                    <span className="price">99</span>
                  </li>
                  <li className="item"><span className="name">Veggy Chese Burger </span>
                    <span className="price">69</span>
                  </li>
                  <li className="item"><span className="name">Crispy Shrimp Burger</span>
                    <span className="price">130</span>
                  </li>
                  <li className="item"><span className="name">Crispy Fish Burger</span>
                    <span className="price">110</span>
                  </li>
                </ul>
              </div>
              <div className="list">
                <h2 className="list-title">Beverages</h2>
                <ul>
                  <li className="item"><span className="name">Pepsi 200ml(can)</span>
                    <span className="price">25</span>
                  </li>
                  <li className="item"><span className="name">CocoCola 200ml</span>
                    <span className="price">25</span>
                  </li>
                  <li className="item"><span className="name">7up 200ml</span>
                    <span className="price">25</span>
                  </li>
                  <li className="item"><span className="name">Thumbsup 200ml</span>
                    <span className="price">25</span>
                  </li>
                  <li className="item"><span className="name">Mirinda 200ml</span>
                    <span className="price">25</span>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h2 className="list-title">Deserts</h2>
                <ul>
                  <li className="item"><span className="name">Caramalized Apple Chiroti</span>
                    <span className="price">40</span>
                  </li>
                  <li className="item"><span className="name">Lemon Coriander Yogurt</span>
                    <span className="price">50</span>
                  </li>
                  <li className="item"><span className="name">Chocolate Bebinca</span>
                    <span className="price">30</span>
                  </li>
                  <li className="item"><span className="name">Turkey</span>
                    <span className="price">50</span>
                  </li>
                  <li className="item"><span className="name">Tender Coconut Mix</span>
                    <span className="price">60</span>
                  </li>
                  <li className="item"><span className="name">Tripple Flavour Desert</span>
                    <span className="price">50</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* menu end here */}
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <Link to="/">
                  <Button className="order-now d-flex ">Order Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
