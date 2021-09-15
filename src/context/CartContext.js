/*Cart context y Cart Provider*/
import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
	// carrito	
	const [cart, setCart] = useState([])

	// agrega un producto al carrito
	const addToCart = (product) => {
		setCart([...cart, product])
	}

	// remueve un producto del carrito por id
	const removeFromCart = (id) => {
		setCart(cart.filter(product=>product.id!==id))
	}

	// cantidad de productos en el carrito
	const countCart = () => {		
		return cart.reduce((total, product) => total + product.count, 0)
	}

	// vaciar carrito
	const emptyCart = () => {
		setCart([])
	}

	// Verifica si un producto esta en el carrito (por id)
	const isInCart = (id) => {		
		return cart.some(product => product.id === id)
	}

	// importe total por producto (por id - cantidad * precio)
	const getTotalPurchaseByProduct = (id) => {
		const product = cart.find(product => product.id === id)
		return product ? product.price * product.count : 0
	}

	// importe total de productos por categoria
	const getTotalPurchaseByCategory = (category) => {
		return cart.filter(product=>product.category===category).reduce((acc, prod) => acc + (prod.price * prod.count), 0)
	}

	// importe total de todos los productos
	const getTotalPurchase = () => {
		return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
	}

	return (
		<CartContext.Provider value={{cart, isInCart, addToCart, removeFromCart, countCart, emptyCart, getTotalPurchase, getTotalPurchaseByCategory, getTotalPurchaseByProduct}}>
			{children}
		</CartContext.Provider>
	)
}