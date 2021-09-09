/*
* Componente que permite, seleccionar una cantidad de elementos 
* que va de 1 y como máximo hasta el stock permitido; la mismo tiempo
* permite añadir el productos con las cantidades al contexto de carrito
* para poder sincronizar.
* Si no se está logueado, no permite añadir al carrito, redirige al 
* componnete NoLogin que indica que debe loguearse para operar.
*/

import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import { UIContext } from '../../context/UIContext';
import { useHistory } from 'react-router-dom'

export const Counter = React.memo(({max, count, setCount, addToCart, added}) => {
	const {email} = useContext(UIContext) // desagrupa el email para saber si esta logueado
	const history = useHistory()

	// añade productos si el usuario esta logueado
	const handleAddToCart = () => {
		if (!email || email.length ===0){
			history.push('/not-login')	// redirect
		} else {
			addToCart()
		}		
	}

	// incrementa la cantidad en funcion del maximo (stock)
	const handleSumar = () => {
		if (count < max){			
			setCount(count+1)
		}
	}

	// decrementa la cantidad en funcion del minimo (1 producto)
	const handleRestar = () => {
		if (count > 1){			
			setCount(count-1)
		}
	}

	return (		
		<>
			<div className={"d-flex"}>
				{
					added ? <Link to="/shopping-cart" className={"btn btn-success"}>Terminar mi compra</Link> :					
					<div className={"d-flex flex-row"}>
						<button className={"btn btn-primary mx-1"} onClick={handleRestar}>-</button>
						<h4 className={"mx-3"}>{count}</h4>
                        <button className={"btn btn-primary mx-1"} onClick={handleSumar}>+</button>
                        <button className={"btn btn-outline-primary mx-2"} onClick={handleAddToCart}>Añadir <i className={"fa fa-shopping-cart"}></i></button>
                    </div>                   
				}
			</div>
		</>
	)
})