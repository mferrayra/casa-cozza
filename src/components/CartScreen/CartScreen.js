import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format'

export const CartScreen = () => {
	const  {cart, removeFromCart, emptyCart} = useContext(CartContext)

	return (
		<div>
			{
				cart.length === 0 ? 
					<h2><i className={"fa fa-frown text-warning"}></i> No añadiste nada aun...</h2> :					
					<div>
						<table className={"table"}>
						<thead>
							<tr>
								<h2>Resumen de compra</h2>
							</tr>
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
								cart.map(product => (
								<tr>
									<th scope={"row"}>{product.article}</th>							
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
									<NumberFormat value={cart.reduce((total, product) => total + (product.price * product.count), 0)} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} />							
								</td>
								<td><span onClick={() => emptyCart()}><i className={"fa fa-trash"}></i></span></td>
							</tr>
						</tfoot>
					</table>
					
					<hr />
					
					<button className={"btn btn-success"} >$$$ Quiero Pagar!</button>
					</div>					
			}			
		</div>
	)
}