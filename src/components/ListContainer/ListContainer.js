/*
* Componente para traer la lista de productos a mostrar: todos o por categoria.0
* Funciona con firebase 9.0.1. Queda comentado el mockeo.
*/

import React, { useContext, useEffect, useState } from 'react'
//import { getProducts, getProductsByCategory } from '../../helpers/Products'
import { CleaningLoader } from '../share/CleaningLoader';
import { ProductList } from './ProductList';
import { UIContext } from '../../context/UIContext'
import { getFirebase } from '../../firebase/config'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

export const ListContainer = React.memo(({category}) => {
    const [data, setData] = useState([])
    const { enableNavBar, setEnableNavBar } = useContext(UIContext) // desagrupa de UI context para deshabilitar la navbar y evitar comportamientos no deseados

    useEffect(()=> {        
        setEnableNavBar(false)

        const db = getFirestore(getFirebase()) // firestore        
        const products = collection(db, 'products') // collection

        let filter = category ? query(products, where('category', '==', category)) : products // query filter

        // promise que hace efectiva la lista de productos
        getDocs(filter).then((response) => {
              const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
              setData(data)
        })
        .catch(err => console.log(err))
        .finally(()=> setEnableNavBar(true))
                
        /*
        let productosPromise = category ? getProductsByCategory(category) : getProducts()
        productosPromise.then(res =>{
            setData(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setEnableNavBar(true))
        */
       
    }, [category])


    return (
        <>
            {!enableNavBar 
             ? <CleaningLoader title = {category ? `Cargando los productos de ${category.toLowerCase()}...` : "Cargando todos los productos..."} />
             : <ProductList category={category} products={data}/>    
            }
        </>
    )
})