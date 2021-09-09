/*
* Este componente hace un map de la lista de productos a mostar con el componente idividual del 
* producto a mostrar.
*/

import { ProductItem } from "./ProductItem"
import React from 'react';

export const ProductList = React.memo(({ category, products = [] }) => {
    return (        
        <section className="container my-5">
            <h2>{category ? category : "Todos los productos"}</h2>
            <hr/>
            <div className="row">
                {products.sort((a, b) => a.price > b.price ? 1 : -1).map((product) => <ProductItem key={product.id} {...product}/> )}
            </div>
        </section>
    )
})