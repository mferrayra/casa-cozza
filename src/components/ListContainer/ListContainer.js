/*
* Componente para traer la lista de productos a mostrar: todos o por categoria.0
* Funciona con firebase 9.0.1. Queda comentado el mockeo.
*/

import React, { useContext, useEffect, useState } from 'react'
import { getProducts } from '../../helpers/Products'
import { CleaningLoader } from '../share/CleaningLoader';
import { ProductList } from './ProductList';
import { AppContext } from '../../context/AppContext'

export const ListContainer = React.memo(({category}) => {
    const [data, setData] = useState([])
    const { enableNavBar, setEnableNavBar } = useContext(AppContext) // desagrupa de UI context para deshabilitar la navbar y evitar comportamientos no deseados

    useEffect(()=> {        
        setEnableNavBar(false)

        let productosPromise = getProducts(category)

        productosPromise.then(res =>{
            setData(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setEnableNavBar(true))
        
       
    }, [category, setEnableNavBar])


    return (
        <>
            {!enableNavBar 
             ? <CleaningLoader title = {category ? `Cargando los productos de ${category.toLowerCase()}...` : "Cargando todos los productos..."} />
             : <ProductList category={category} products={data}/>    
            }
        </>
    )
})