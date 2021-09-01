import React from 'react'
import NumberFormat from 'react-number-format'
import { Link, useLocation } from 'react-router-dom'

export const ProductDetail = ({category, article, detail, price, img, stock}) => {  
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
                        <div className={"col-7"}>
                            <img src={img} alt={article} className={"img-fluid w-100"}/>
                            <h4>price: <b><NumberFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b></h4>
                            <p>{detail}</p>
                        </div> 
                        <div className={"col-5 text-center pt-3"}>
                            <div className={"row"}>
                                <span>Disponibles: <b>{stock}</b> hasta agotar stock!</span>
                            </div>                            
                            <br />
                            <img src={"/images/medios-pago.png"} alt={"Medios de pago"} className={"border"}></img>
                            <br />
                            <br />
                            <b>Cantidad</b>
                            <br />
                            <input type={Text} value={1} placeholder={"Poné cuantos querés comprar"} className={"text-center"} />
                            <br />
                            <br />
                            <div className={"row"}>
                                <Link to={"#"} className={"btn btn-success"}><i class="fas fa-shopping-cart fa-2x">&nbsp;Comprar</i></Link>
                            </div>                                                        
                        </div>
                    </div>                                       
                </div>                
                <Link to={`${arrPathname.join("/")}`} className="btn btn-primary">Quiero seguir buscando...</Link>
            </div>            
        </div>
    )
}