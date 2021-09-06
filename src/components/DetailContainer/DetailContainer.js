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
    const { enableNavBar, setEnableNavBar } = useContext(UIContext)

    useEffect(()=>{        
        setEnableNavBar(false)        

        const db = getFirestore(getFirebase())        

        let filter = doc(db, 'products', productId)
        
        getDoc(filter).then((response) => {            
          const data = {...response.data(), id: response.id}
          setProducto(data)              
        })
        .catch(err => console.log(err))
        .finally(()=> setEnableNavBar(true))

        /*
        getProductById(parseInt(productoId)).then(res => {                               
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