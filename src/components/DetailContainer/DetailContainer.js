/*
* DetailContainer Component: busca un producto y lo renderiza
*/

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from "../../helpers/Product"
import { ProductDetail } from './ProductDetail'
import { CleaningLoader } from '../Share/CleaningLoader'
import { AppContext } from '../../context/AppContext'

export const DetailContainer = React.memo(() => {
    // parametro rest (identificador)
    const { productId } = useParams()
    // produto   
    const [producto, setProducto] = useState(null)
    // habilitar (o no) navbar
    const { enableNavBar, setEnableNavBar } = useContext(AppContext)

    // montaje
    useEffect(()=>{
        setEnableNavBar(false)
        // get producto por id
        getProductById(productId).then(data => {             
            setProducto(data)            
        })
        .finally(()=> { setEnableNavBar(true)})        

    }, [productId, setEnableNavBar])

    return (
        <div>            
            {!enableNavBar 
                ? <CleaningLoader title = {"Cargando detalle del producto..."} />
                : <ProductDetail {...producto}/>
            }
        </div>
    )
})