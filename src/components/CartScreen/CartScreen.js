/*
* Este componente permite visualizar el resumen de compra del carrito 
* agrupado y totalizado por categoria y con total final de la compra.
* También permite eliminar elementos del carrito, como asi también
* eliminar la compra completa, es decir vaciar el carrito.
* El botón [$$$ Quiero Pagar!] es solamente ilustrativo.
* Si no hay ningún producto agregado al carrito, sale una leyenda que 
* indica que no hay elementos añadidos.
* Si un usuario no se logueo, redirije a una página que indica que hay que 
* hay que iniciar sesion para operar con el carrito.
*/

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import NumberFormat from 'react-number-format'
import { CategoryProducts } from './CategoryProducts'
import { Link } from 'react-router-dom'

export const CartScreen = React.memo(() => {
	const {cart, emptyCart} = useContext(CartContext) // contexto del carrito: se desagrupan los productos agregados y el metodo para vaciar el carrito	

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
						<h3>Tu resumen de compra</h3>						
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
						<div className={"row text-end p-3"}><h4>Total Final: {<NumberFormat value={cart.reduce((total, product) => total + (product.price * product.count), 0)} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} />}</h4></div>
						<div className={"row"}>
							<div className={"col-2"}>
								<button className={"btn btn-success"} ><i className={"fa fa-check-square"}></i> Finalizar la compra</button>
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