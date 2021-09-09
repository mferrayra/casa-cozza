/*Gets del mock*/
import { products } from '../data/products'

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductsByCategory = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve(products.filter(il=>il.category === category))
        }, 2000);
    })
}

export const getProductById = (productId) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = products.find(il=>il.id === productId)              
            resolve(product)
        }, 2000);
    })
}