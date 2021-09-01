import { productsCleaning } from "../data/productsCleaning"

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(productsCleaning)
        }, 2000);
    })
}

export const getProductsByCategory = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve(productsCleaning.filter(il=>il.category === category))
        }, 2000);
    })
}

export const getProductById = (productId) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = productsCleaning.find(il=>il.id === productId)              
            resolve(product)
        }, 2000);
    })
}