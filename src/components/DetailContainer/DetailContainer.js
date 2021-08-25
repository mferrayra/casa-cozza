import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductoById } from "../../helpers/Productos"
import { ProductoDetail } from './ProductoDetail'

export const DetailContainer = () => {
    const { productoId } = useParams()   
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{        
        setLoading(true)        
        getProductoById(parseInt(productoId)).then(res => {                               
            setProducto(res)            
        })
        .finally(()=> { setLoading(false)})

    }, [productoId])


    return (
        <div>            
            {loading 
                ? <h2>Cargando...</h2>                
                : <ProductoDetail {...producto}/>
            }
        </div>
    )
}