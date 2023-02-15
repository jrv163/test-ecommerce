import React from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductList } from '../components/ProductList'
import { useForm } from '../hooks/useForm'

import { ProductCard } from '../components/ProductCard'
import { getProductByName } from '../helpers'

export const Products = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q  = ''} = queryString.parse( location.search ); // instalar query-string para obtener los valores de search
  //console.log( query )

  const products = getProductByName( q );

const { searchText, onInputChange } = useForm({
  searchText: q
});

const onSearchSubmit = ( event ) => {
  event.preventDefault();
  if ( searchText.trim().length <= 1 ) return;

  navigate( `?q=${ searchText }`); 

  console.log({ searchText });
}

  return (
    <>
      <div className='container'>
            <div className= 'container__search'>
              <div className='col-6 container__form'> 
            
              <form onSubmit={ onSearchSubmit } >
                <input 
                  type="text"
                  placeholder='Nunca dejes de buscar'
                  className='form-control'
                  name='searchText' 
                  autoComplete='off'
                  value={ searchText }
                  onChange={ onInputChange }
                />
                <div className='box__icon'>
                  <img src="/ic_Search.png" alt="icono busqueda" className='form__icon' />
                </div>

              </form>
              </div>

            </div>
            
            {
              ( q  === '' )
              ? <h6>Busca un producto </h6>
              : ( products.length === 0 ) &&  <div className='alert alert-danger'>
              No product with <b>{ q }</b> 
            </div>

            }

            {
              products.map( product => (
                <ProductCard  key={ product.id } { ...product }/>
              ))
            }

            <ProductList tipo ='consumo' />
      </div>
    </>
  )
}
