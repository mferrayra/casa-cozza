/*
* Componente que renderiza el carrito en la navbar con el total de elementos
* sincronizados por el componente counter en función de como se añaden los productos 
* y las cantidades.
*/

import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = React.memo(() => {

    const {countCart} = useContext(CartContext) // desagrupa el metodo que devuelve el total de los productos añadidos

    return (
        <>
            <Link to="/shopping-cart">
                <span><i className={"fa fa-shopping-cart fa-2x"}></i></span>  
                &nbsp;          
                <span>{countCart()}</span>
            </Link>
            
        </>        
    )
})