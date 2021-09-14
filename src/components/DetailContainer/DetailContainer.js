/*
* Este componente obtiene un producto en funcion del identificador del producto (parametro),
* para posteriormente renderizar el componente de detalle para el agregado en el carrito.
* Funciona con firebase 9.0.1. Queda comentado el mockeo.
*/

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from "../../helpers/Products"
import { ProductDetail } from './ProductDetail'
import { CleaningLoader } from '../share/CleaningLoader'
import { AppContext } from '../../context/AppContext'

export const DetailContainer = React.memo(() => {
    const { productId } = useParams()   
    const [producto, setProducto] = useState(null)
    const { enableNavBar, setEnableNavBar } = useContext(AppContext) // se desagrupa de UI context para poder habilitar y deshabilitar el navbar y evitar coportamientos no deseados

    useEffect(()=>{
        setEnableNavBar(false)
        
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