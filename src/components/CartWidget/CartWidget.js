/*
* CartWidget Component: carrito que totaliza los productos añadidos
*/

import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = React.memo(() => {
    // cantidad de productos añadidos al carrito
    const {countCart} = useContext(CartContext)

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