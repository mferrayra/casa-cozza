import { Link } from 'react-router-dom'
import React from 'react';

export const Counter = React.memo(({max, count, setCount, addToCart, added}) => {
	const handleSumar = () => {
		if (count < max){			
			setCount(count+1)
		}
	}

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
                        <button className={"btn btn-outline-primary mx-2"} onClick={addToCart}>Añadir <i className={"fa fa-shopping-cart"}></i></button>
                    </div>                   
				}
			</div>
		</>
	)
})