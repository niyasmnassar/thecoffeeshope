import React from 'react';
import { CartState } from '../Context';
import Product from './Product';
import Offer from './Offer';


// const ProductList = ({cart, setCart}) => {
  const ProductList = () => {
  const { productItems } = CartState();
  return (
    <div className='productlist'>
        <div className="container-fluid">
        <Offer />
          <div className="row">
            {
              productItems.map((prod) => (
                <Product key={prod.id} prod={prod}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductList
