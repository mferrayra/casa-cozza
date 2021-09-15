/*Order Helper*/
import { getFirebase } from '../firebase/config'
import { getFirestore, collection, getDocs, query, where, Timestamp, documentId, writeBatch, addDoc } from 'firebase/firestore/lite';

//import { Timestamp, documentId } from 'firebase/firestore';

const db = getFirestore(getFirebase()) // firestore

// genera una orden de compra en la db (firebase)
export const generateOrder = (buyer, cart, total) => {
	
	

	return new Promise(async (resolve, reject) => {		
		const newOrder = {
	        buyer: buyer,
	        items: cart,
	        total: total,
	        date: Timestamp.fromDate(new Date())
	    }

	    const products = collection(db, 'products')
	    
	    const filter = query(products, where(documentId(), 'in', cart.map(product => product.id)))

	    const productsToUpdateStock = await getDocs(filter)

	    const wBatch = writeBatch(db)

	    //const queryProduct = await productsToUpdateStock.get()

        const outOfStock = []

        productsToUpdateStock.docs.forEach((doc) => {
            const productInCart = cart.find(el => el.id === doc.id)

            if (doc.data().stock >= productInCart.count ) {
                wBatch.update(doc.ref, {stock: doc.data().stock - productInCart.count })
            } else {
                outOfStock.push({id: doc.id, ...doc.data()})
            }
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, "orders"), newOrder).then((res)=>{
            	wBatch.commit()
                resolve(res.id)
            }).catch((err) =>{
            	reject(err)
            })            
        } else {
            reject({
                error: "Productos sin stock",
                sinStock: outOfStock
            })
        }
	})
}