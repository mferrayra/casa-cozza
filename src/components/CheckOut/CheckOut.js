/*
* CheckOut Component: renderiza un resumen de compra, y habilita la generacion de la orden de compra
*/

import { Summary } from './Summary'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import  { Redirect  } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import { generateOrder } from '../../helpers/Order'
import Swal from 'sweetalert2'
import Loader from 'react-loader-spinner';

export const CheckOut = () => {
	// habilitar (o no) navbar
    const { enableNavBar, setEnableNavBar } = useContext(AppContext)
	// cantidad añadida al carrito, vacias carrito, carrito
	const {countCart, emptyCart, cart} = useContext(CartContext)
	// usuario logueado (mocked)	
	const {user} = useContext(AppContext)	

	// handle submit form
	const checkout = (event) => {
		event.preventDefault()
		setEnableNavBar(false)
		generateOrder(user, cart, countCart()).then(res => {			
			Swal.fire({
	            icon: 'success',
	            title: 'Su compra fue registrada!',
	            text: `Identificador de compra: ${res}`,
	            confirmButtonText: 'Genial!'
	        })
	        emptyCart()	
		}).catch(err => {
			console.log(err)
		}).finally(()=>setEnableNavBar(true))		
	}

	return (
		<>
			{
				countCart() > 0 ?
				<div className="container d-flex flex-row m-5 p-2">
				 	<Summary />
				 	<div className="container col-6 d-flex flex-column m-5 p-2 border border-success">
				 		<h4>Mis datos de facturacion</h4>
						<hr />
						<form onSubmit={checkout}>
							<input type="text" className="form-control mb-3" placeholder="tus nombres..." required value={user.names} />
							<input type="email" className="form-control mb-3" placeholder="tu email..." required value={user.email} />
	                    	<input type="text" className="form-control mb-3" placeholder="tu teléfono..." required value={user.phone} />
	                    	<input type="text" className="form-control mb-3" placeholder="tu domicilio..." required value={user.address} />
	                    	<div className="d-flex flex-row">
	                    		<button type="submit" className="btn btn-block btn-success btn-round mb-3 text-white">Generar Orden de Compra</button>
		                    	{
		                    		(!enableNavBar) && <Loader type="Circles" color="#00BFFF" height={30} width={30} />
		                    	}
	                    	</div>	                    	
						</form>
				 	</div>
				</div> :
				<Redirect to="/"/>
			}
		</>
	)
}