import React from 'react'
import { Nav } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <footer className='d-flex justify-content-center flex-column align-items-center'>
        <Nav
  activeKey="/home"
>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Menu" eventKey="Menu">Menu</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/About" eventKey="About">About Us</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Contact" eventKey="Contact">Contact</Nav.Link>
  </Nav.Item>
</Nav>
<div className="row">
    <div className="col-md-12">
        <p className='copy'>©TheCoffeeShope Limited. All Rights Reserved.</p>
    </div>
</div>
</footer>
    </div>
  )
}

export default Footer