import React from 'react'
import NumberFormat from 'react-number-format'
import { Link, useLocation } from 'react-router-dom'

export const ProductItem = React.memo(({id, category, article, detail, price, img}) => {    
    let arrPathname = useLocation().pathname.split("/").filter(p => p || p.length>0)
    arrPathname.push("product")
    arrPathname.push(`${id}`)    
    return (
        <div className="card col-3 pb-3">
            <h4 className={"w-100 text-end pt-2"}><b><NumberFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b></h4>
            <div className="card-body flex-row">
                <img src={img} alt={article}/>
                <h6><b>{article}</b></h6>
            <p>{detail}</p>            
            </div>            
            <Link to={`/${arrPathname.join("/")}`} className={"m-0 btn btn-outline-primary"}>Ver producto</Link>
        </div>
    )
})