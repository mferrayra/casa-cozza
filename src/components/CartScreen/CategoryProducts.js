/*
* Este componente atomiza el render para la agrupacion de productos por categoria
* con totalizado y función para eliminar productos en forma individual. 
*/

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format'

export const CategoryProducts = React.memo(({category}) => {
	const  {cart, removeFromCart} = useContext(CartContext)	// desagrupa productos y el metodo remover un elemento del carrito
	return (
		<>
			<h4>{category}</h4>
			<table className={"table"}>
				<thead>					
					<tr>
						<th scope={"col"}>Producto</th>						
						<th scope={"col"}>Precio Unitario</th>
						<th scope={"col"}>Cantidad</th>
						<th scope={"col"} className={"text-end"}>Total</th>
						<th scope={"col"}></th>
					</tr>
				</thead>
				<tbody>
					{								
						cart.filter(p=>p.category===category).map(product => (										
							<tr key={product.id}>
								<th scope={"row"}>{product.article} <img style={{ "width": "50px"}} src={product.img} alt="product" /></th>							
								<td><NumberFormat value={product.price} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></td>
								<td>{product.count}</td>							
								<td className={"text-end"}><NumberFormat value={product.price * product.count} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></td>						
								<td><span onClick={()=>removeFromCart(product.id)}><i className={"fa fa-trash"}></i></span></td>							
							</tr>
						))
					}																				
				</tbody>					
				<tfoot>
					<tr>
						<td colSpan={4} className={"text-end"}>
							<NumberFormat value={cart.filter(p=>p.category===category).reduce((total, product) => total + (product.price * product.count), 0)} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} />							
						</td>						
					</tr>
				</tfoot>
			</table>
		</>
	)
})