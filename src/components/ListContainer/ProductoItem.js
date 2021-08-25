import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const ProductoItem = ({id, categoria, articulo, detalle, precio, img}) => {    
    let arrPathname = useLocation().pathname.split("/").filter(p => p || p.length>0)
    arrPathname.push("producto")
    arrPathname.push(`${id}`)    
    return (
        <div className="card col-3">
            <div className="card-body flex-row">
                <img src={img} alt={articulo}/>
            </div>
            
            <h4>{articulo} $ {precio}</h4>
            <p>{detalle}</p>
            <Link to={`/${arrPathname.join("/")}`} className="btn btn-outline-primary">Ver producto</Link>            
        </div>
    )
}