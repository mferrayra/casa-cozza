import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format'
import { CategoryProducts } from './CategoryProducts'

export const CartScreen = React.memo(() => {
	const  {cart, emptyCart} = useContext(CartContext)	
	return (
		<>
			{
				cart.length === 0 ? 
					<h2><i className={"fa fa-frown text-warning"}></i> No añadiste nada aun...</h2> :					
					<>
						<h2>Tu resumen de compra</h2>
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
								<button className={"btn btn-success"} >$$$ Quiero Pagar!</button>
							</div>
							<div className={"col-2"}>
								<button className={"btn btn-danger"} onClick={()=>emptyCart()} ><i className={"fa fa-trash"}></i> Cancelar Compra!</button>
							</div>
						</div>
					</>			
										
			}			
		</>
	)
})