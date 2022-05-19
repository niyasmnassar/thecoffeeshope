import React, { useState } from 'react';
import Product from './Product';


const ProductList = ({cart, setCart}) => {
  const products = [
    {name : "Cappuccino", price : 60.00, id : 1, image:'assets/coffee-latte.jpg'},
    {name : "Americano", price : 70.00, id : 2, image:'assets/coffee-latte.jpg'},
    {name : "Cafe Mocha", price : 60.00, id : 3, image:'assets/coffee-latte.jpg'},
    {name : "Vanilla Latte", price : 65.00, id : 4, image:'assets/coffee-latte.jpg'},
    {name : "Espresso", price : 80.00, id : 5, image:'assets/coffee-latte.jpg'},
    {name : "Caffe Latte", price : 70.00, id : 6, image:'assets/coffee-latte.jpg'},
  ]
  const [productItems] = useState(products);
   console.log(cart)
  return (
    <div className='productlist'>
        <div className="container-fluid">
          <div className="row">
            {
              productItems.map(prod => (
                <Product key={prod.id} prod={prod} cart={cart} setCart={setCart}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductList
