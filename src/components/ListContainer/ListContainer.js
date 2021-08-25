import React, { useEffect, useState } from 'react'
import { getProductos, getProductosByCategoria } from '../../helpers/Productos'
import { ProductoList } from './ProductoList'

export const ListContainer = ({categoria}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)   

    useEffect(()=> {        
        setLoading(true)

        let productosPromise = categoria ? getProductosByCategoria(categoria) : getProductos()
        productosPromise.then(res =>{
            setData(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }, [categoria])


    return (
        <>
            {loading 
             ? <h2>Cargando...</h2>
             : <ProductoList categoria={categoria} productos={data}/>    
            }
        </>
    )
}