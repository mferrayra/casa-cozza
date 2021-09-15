/*Product Helper*/
//import { products } from '../data/products'
import { getFirebase } from '../firebase/config'
import { getFirestore, collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore/lite';

const db = getFirestore(getFirebase()) // firestore

// devuelve una lista de productos (todos o por categoria)
export const getProducts = async (category) => {
    
    const products = collection(db, 'products') // collection
    
    const filter = category ? query(products, where('category', '==', category)) : products // query filter
 
    const response = await getDocs(filter)
    
    return new Promise((resolve, reject) => {            
        resolve(response.docs.map((doc) => ({...doc.data(), id: doc.id})))  
    })
    

    /*
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (category){
                resolve(products.filter(il=>il.category === category))
            } else {
                resolve(products)    
            }            
        }, 500);
    })
    */
}

// devuelve un producto por su identificador
export const getProductById = async (productId) => {
        
    const filter = doc(db, 'products', productId) //doc filter

    const response = await getDoc(filter)
    
    return new Promise((resolve, reject) => {  
        const data = {...response.data(), id: response.id}
        resolve(data)  
    })
    
   
    /*
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = products.find(il=>il.id === parseInt(productId))              
            resolve(product)
        }, 500);
    })
    */
}