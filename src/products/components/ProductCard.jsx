import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ 
    id,
    precio,
    title,
    tipo,
    description, 

}) => {

    const productImageUrl = `/assets/${ id }.jpg`

  return (
    <div className='col dp-block'>
        <div className='card'>
            <div className='row no-gutters'>
                <div>
                    <img src={ productImageUrl } 
                    className='card-img ' 
                    alt={ title }/>

                    <div className='col-12 '>
                        <div className='card-body card__box '>
                            <h5 className='card-title mt-10'>{ new Intl.NumberFormat('es-CO', 
                      { style: 'currency',
                      currency: 'COP'
                      }).format(precio)}</h5>
                            <br />
                            <Link to={ `/description/${ id }` } >
                                <button className='btn btn-outline-primary mt-10'>
                                       Comprar     
                                </button>
                            </Link>
                            <br />
                            <br />
                            <p className='card-text mt-10'>{ title }</p>
                       
                            <p className='card-text mt-10'>{ description }</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
