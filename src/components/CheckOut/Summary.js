/*
* Summary Component: renderiza un resumen de compra de los productos añadidos al carrito
*/

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format'

export const Summary = () => {
	// carrito, importe total por producto, importe total de la compra
	const {cart, getTotalPurchaseByProduct, getTotalPurchase} = useContext(CartContext)
	return (
		<>
			<div className="container col-6 d-flex flex-column m-5 p-2 border border-primary">
				<h4>Mi compra</h4>
				<hr />
				{
					cart.map(product => (
						<div key={product.id} className="row">
							<div className="col-9">
								{product.count} {product.article}
							</div>
							<div className="col-2 text-end">
								<b><NumberFormat value={getTotalPurchaseByProduct(product.id)} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b>
							</div>
						</div>					
					))
				}
				<div className="row text-center p-2">
					<h5>Total <NumberFormat value={getTotalPurchase()} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></h5>
				</div>								
			</div>
		</>
	)
}