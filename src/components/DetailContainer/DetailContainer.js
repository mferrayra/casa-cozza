/*
* Este componente obtiene un producto en funcion del identificador del producto (parametro),
* para posteriormente renderizar el componente de detalle para el agregado en el carrito.
* Funciona con firebase 9.0.1. Queda comentado el mockeo.
*/

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import { getProductById } from "../../helpers/Products"
import { ProductDetail } from './ProductDetail'
import { CleaningLoader } from '../share/CleaningLoader'
import { UIContext } from '../../context/UIContext'
import { getFirebase } from '../../firebase/config'
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';

export const DetailContainer = React.memo(() => {
    const { productId } = useParams()   
    const [producto, setProducto] = useState(null)
    const { enableNavBar, setEnableNavBar } = useContext(UIContext) // se desagrupa de UI context para poder habilitar y deshabilitar el navbar y evitar coportamientos no deseados

    useEffect(()=>{        
        setEnableNavBar(false)        

        const db = getFirestore(getFirebase()) // firestore        

        let filter = doc(db, 'products', productId) //doc filter
        
        // promise para recuperar el producto
        getDoc(filter).then((response) => {            
          const data = {...response.data(), id: response.id}
          setProducto(data)              
        })
        .catch(err => console.log(err))
        .finally(()=> setEnableNavBar(true))
        
        /*
        getProductById(parseInt(productId)).then(res => {                               
            setProducto(res)            
        })
        .finally(()=> { setEnableNavBar(true)})
        */

    }, [productId])

    return (
        <div>            
            {!enableNavBar 
                ? <CleaningLoader title = {"Cargando detalle del producto..."} />
                : <ProductDetail {...producto}/>
            }
        </div>
    )
})