import React from 'react'

import { getProductsByType } from '../helpers/getProductsByType';
import { ProductCard } from './ProductCard';


export const ProductList = ({ tipo }) => {

    const products = getProductsByType( tipo );

  return (
    <div className='row rows-cols-1 row-cols-md-1 g-3'>
        {
            products.map( product => (
                <ProductCard key={ product.id } 
                 { ...product }
                 />
            ))
        }
    </div>
  )
}
