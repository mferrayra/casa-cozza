import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const {countCart} = useContext(CartContext)

    return (
        <>
            <Link to="/shopping-cart">
                <span><i className={"fa fa-shopping-cart fa-2x"}></i></span>            
                <span>{countCart()}</span>
            </Link>
            
        </>        
    )
}