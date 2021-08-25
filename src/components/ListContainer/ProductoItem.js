import React from 'react'
import NumberFormat from 'react-number-format'
import { Link, useLocation } from 'react-router-dom'

export const ProductoItem = ({id, categoria, articulo, detalle, precio, img}) => {    
    let arrPathname = useLocation().pathname.split("/").filter(p => p || p.length>0)
    arrPathname.push("producto")
    arrPathname.push(`${id}`)    
    return (
        <div className="card col-3">
            <h4>Precio: <b><NumberFormat value={precio} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b></h4>
            <div className="card-body flex-row">
                <img src={img} alt={articulo}/>
            </div>            
            <h6><b>{articulo}</b></h6>
            <p>{detalle}</p>
            <Link to={`/${arrPathname.join("/")}`} className="btn btn-outline-primary mb-4">Ver producto</Link>            
        </div>
    )
}