import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../helpers';

export const ProductDescription = () => {

const { id } = useParams();

const product = getProductById( id );

const navigate = useNavigate();

const onBack = () => {
  navigate(-1); 
}

//console.log( product )s

if ( !product ) {
  return <Navigate to='/products'/>
}

  return (
    <div className='row mt-5  animate__animated animate__fadeInLeft'>
      <div className='col-4 animate__animated animate__fadeIn '>
        <img src={ `/assets/${ id }.jpg ` } alt={ product.title } className='img-thumbnail'/>
      </div>

        <div className='col-8'>
          <h3>{ product.title }</h3>
          <h3>{ new Intl.NumberFormat('es-CO', 
                      { style: 'currency',
                      currency: 'COP'
                      }).format(product.precio)}</h3>
          <button className='btn btn-primary'>
              Comprar
          </button>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> <b>Description:</b> { product.description } </li>
          </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button 
              className='btn btn-outline-primary'
              onClick={ onBack }
              >
               Regresar
            </button>

        </div>

    </div>
  )
}
