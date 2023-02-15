import { productos } from "../data/product"

export const getProductById = ( id ) => {


    return productos.find( producto => producto.id === id  );
}