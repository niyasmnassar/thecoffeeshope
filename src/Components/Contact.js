import React from "react";

function Contact() {
  return (
    <div className="base-bg h-70 contact">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div className="br-box">
              <h2>Locate Us</h2>
            <p className="text-center">TheCoffeeShope Company Limited<br />368 – 369 Sultanpur MG Road,<br />New
            Delhi -110030 , India</p>.
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="br-box">
              <h2>Keep in Touch with Us</h2>
              <p className="text-center"><em>Let's SPREAD GOODNESS TOGETHER</em></p>
              <p className="text-center">Email ID : information@thecoffeeshope.co.in<br /> Call Us : <a href="tel:1800 233 433">1800 233 433</a></p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
