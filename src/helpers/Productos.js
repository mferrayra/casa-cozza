import { itemsLimpieza } from "../datos/itemsLimpieza";

export const getProductos = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsLimpieza)
        }, 1000);
    })
}

export const getProductosByCategoria = (categoria) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve(itemsLimpieza.filter(il=>il.categoria === categoria))
        }, 1000);
    })
}

export const getProductoById = (productoId) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let producto = itemsLimpieza.find(il=>il.id === productoId)              
            resolve(producto)
        }, 1000);
    })
}