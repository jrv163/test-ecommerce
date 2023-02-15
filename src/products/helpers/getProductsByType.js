import { productos } from "../data/product";

export const getProductsByType = ( tipo ) => {

    const validConsumo = [ 'consumo' ];

    if( !validConsumo.includes( tipo ) ) {
        throw new Error( `${ tipo } is not a valid type ` )
    }

    return productos.filter( producto => producto.tipo === tipo ); 

}