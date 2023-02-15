import { productos } from "../data/product";


export const getProductByName = ( name = '' ) => {


     name = name.toLocaleLowerCase().trim();

    if ( name.length === 0 ) return [];

    return productos.filter(
        product => product.title.toLocaleLowerCase().includes( name )
    );

   
}