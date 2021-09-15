/*
* ListContainer Component: obtiene y renderiza una lista de productos (todos o por categoria)
*/
import React, { useContext, useEffect, useState } from 'react'
import { getProducts } from '../../helpers/Product'
import { CleaningLoader } from '../share/CleaningLoader';
import { ProductList } from './ProductList';
import { AppContext } from '../../context/AppContext'

export const ListContainer = React.memo(({category}) => {
    // lista de productos
    const [data, setData] = useState([])
    // habilitar/deshabilitar navbar
    const { enableNavBar, setEnableNavBar } = useContext(AppContext)

    // montaje
    useEffect(()=> {        
        setEnableNavBar(false)

        // products promise
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