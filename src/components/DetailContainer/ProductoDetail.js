import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const ProductoDetail = ({categoria, articulo, detalle, precio, img}) => {  
    let arrPathname = useLocation().pathname.split("/")
    arrPathname.splice(arrPathname.length - 2, 2)    
    return (
        <div>
            <h2>{articulo}</h2>
            <p>Precio: {precio}</p>
            <img src={img} alt={articulo}/>
            <p>{detalle}</p>
            <Link to={`${arrPathname.join("/")}`} className="btn btn-primary">Volver</Link>
        </div>
    )
}