/*Cart context y Cart Provider*/
import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {	
	const [cart, setCart] = useState([])

	const addToCart = (product) => {
		setCart([...cart, product])
	}

	const removeFromCart = (id) => {
		setCart(cart.filter(product=>product.id!==id))
	}

	const countCart = () => {		
		return cart.reduce((total, product) => total + product.count, 0)
	}

	const emptyCart = () => {
		setCart([])
	}

	const isInCart = (id) => {		
		return cart.some(product => product.id === id)
	}

	return (
		<CartContext.Provider value={{cart, isInCart, addToCart, removeFromCart, countCart, emptyCart}}>
			{children}
		</CartContext.Provider>
	)
}