/*Orders Component: renderiza las ordenes de compra generadas, guardadas en firebase*/
import { getOrders } from '../../helpers/Order'
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import NumberFormat from 'react-number-format'

export const Orders = React.memo(() => {
	// habilitar (o no) navbar
    const { setEnableNavBar } = useContext(AppContext)
    // orders
	const [orders, setOrders] = useState([])

	//montaje
	useEffect(()=>{
		setEnableNavBar(false)
		getOrders().then((res)=>{
			setOrders(res)
		})
		.catch(err => console.log(err))
	    .finally(()=> setEnableNavBar(true))
	}, [setEnableNavBar])
	
	return (
		<div className="container m-5">
			<h4>Mis Compras Generadas</h4>
			{				
				orders.map((order) => (
					<div key={order.id} className="d-flex flex-column m-3">
						<div className="d-flex flex-row">
							<div className="col-4">
								<b>Fecha:</b> {order.date}
							</div>
							<div className="col-4">
								<b>Orden:</b> {order.id}
							</div>							
						</div>	
						<hr />
						{
							order.products.map((product) => (
								<div key={product.id} className="d-flex flex-row">
									<div className="col-8">
										{product.article} x {product.count} unidade/s
									</div>									
									<div className="col-4">
										<b><NumberFormat value={product.price * product.count} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b>
									</div>
								</div>
							))
						}
						<div className="text-center">
							<b>Total <NumberFormat value={order.products.reduce((total, product)=> total + (product.price * product.count), 0)} displayType={"text"} thousandSeparator={true} prefix={"$"} fixedDecimalScale={true} decimalScale={2} /></b>
						</div>
						<hr />
					</div>
				))				
			}		
		</div>		
	)
})