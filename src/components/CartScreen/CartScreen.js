/*
* CartScreen component: renderiza todos los productos añadidos, agrupado por categoria y totalizados
*/

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import NumberFormat from 'react-number-format'
import { CategoryProducts } from './CategoryProducts'
import { Link } from 'react-router-dom'

export const CartScreen = React.memo(() => {
	// carrito, vaciar carrito, obtener el importe total a pagar
	const {cart, emptyCart, getTotalPurchase} = useContext(CartContext)

	return (
		<>
			<div className="row">
				<div className="col-4 offset-9">
					<Link to="/" className={"btn btn-social mt-4 mb-4 d-flex"}><i className={"fa fa-cart-plus fa-2x"}></i> <h4>Añadir productos</h4></Link>
				</div>				
			</div>
			
			{
				cart.length === 0 ? 
					<div className="row">
						<div className="col-10 offset-1">
							<h3 className="btn-primary btn-round p-2">No añadiste nada aun...<i className={"fa fa-frown text-warning"}></i></h3>	
						</div>						
					</div> :
					<div className="container">
						<h3>Tu detalle de compra</h3>						
						{
							(cart.some(p=>p.category==="Limpieza")) && <CategoryProducts category={"Limpieza"} />							
						}
						{
							(cart.some(p=>p.category==="Bazar")) && <CategoryProducts category={"Bazar"} />							
						}
						{
							(cart.some(p=>p.category==="Perfumeria")) && <CategoryProducts category={"Perfumeria"} />							
						}
						{
							(cart.some(p=>p.category==="Pet Shop")) && <CategoryProducts category={"Pet Shop"} />
						}
						<div className={"row text-end p-3"}><h4>Total Final: {<NumberFormat value={getTotalPurchase()} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} />}</h4></div>
						<div className={"row"}>
							<div className={"col-3"}>
								<Link to={"check-out"} className={"btn btn-success"} ><i className={"fa fa-check-square"}></i> Finalizar la compra</Link>
							</div>
							<div className={"col-2"}>
								<button className={"btn btn-danger"} onClick={()=>emptyCart()} ><i className={"fa fa-trash"}></i> Cancelar la Compra</button>
							</div>							
						</div>
					</div>
			}			
		</>
	)
})