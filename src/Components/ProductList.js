import React from 'react';
import { CartState } from '../Context/Context';
import Product from './Product';
import Offer from './Offer';


// const ProductList = ({cart, setCart}) => {
  const ProductList = () => {
  const { state : { products },
} = CartState();
  console.log(products)
  return (
    <div className='productlist'>
        <div className="container">
        <Offer />
          <div className="row justify-content-center">
            {
              products.map((prod) => (
                <Product key={prod.id} prod={prod}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductList
