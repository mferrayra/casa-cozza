import React, { useContext, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Link, useLocation } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import { CartContext } from '../../context/CartContext'

export const ProductDetail = ({id, category, article, detail, price, img, stock}) => {  
    const { addToCart, isInCart } = useContext(CartContext)
    const [count, setCount] = useState(1)

    const handleAddToCart = () => {
         addToCart({
             id, category, article, detail, price, img, count
         })
    }    
    let arrPathname = useLocation().pathname.split("/")
    arrPathname.splice(arrPathname.length - 2, 2)            
    return (
        <div className="row">            
            <div className="card col col-5 offset-4 mt-5">                                
                <div className="card-body">
                    <div className={"row text-justify"}>
                    <h1>{article}</h1>
                    </div>                    
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <img src={img} alt={article} className={"img-fluid w-100"}/>
                            <h4>Precio: <b><NumberFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b></h4>
                            <p>{detail}</p>
                        </div> 
                        <div className={"col-6 text-center pt-3"}>
                            <div className={"row"}>
                                <span>Disponibles: <b>{stock - count}</b> hasta agotar stock!</span>
                            </div>                            
                            <br />
                            <br />                            
                            <Counter max={stock} count={count} setCount={setCount} addToCart={handleAddToCart} added={isInCart(id)} />                            
                        </div>
                    </div>                                       
                </div>                
                <Link to={`${arrPathname.filter(p=>p.length > 0).length ===0 ? "/" : "/" + arrPathname.filter(p=>p.length > 0).join("/")}`} className="btn btn-primary">Quiero seguir buscando...</Link>
            </div>            
        </div>
    )
}