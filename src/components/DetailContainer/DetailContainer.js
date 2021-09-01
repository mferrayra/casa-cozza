import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from "../../helpers/Products"
import { ProductDetail } from './ProductDetail'
import { CleaningLoader } from '../share/CleaningLoader'

export const DetailContainer = () => {
    const { productoId } = useParams()   
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{        
        setLoading(true)        
        getProductById(parseInt(productoId)).then(res => {                               
            setProducto(res)            
        })
        .finally(()=> { setLoading(false)})

    }, [productoId])

    return (
        <div>            
            {loading 
                ? <CleaningLoader title = {"Cargando detalle del producto..."} />
                : <ProductDetail {...producto}/>
            }
        </div>
    )
}