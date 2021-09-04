import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../helpers/Products'
import { CleaningLoader } from '../share/CleaningLoader';
import { ProductList } from './ProductList';

export const ListContainer = ({category}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)   

    useEffect(()=> {        
        setLoading(true)

        let productosPromise = category ? getProductsByCategory(category) : getProducts()
        productosPromise.then(res =>{
            setData(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }, [category])


    return (
        <>
            {loading 
             ? <CleaningLoader title = {category ? `Cargando los productos de ${category.toLowerCase()}...` : "Cargando todos los productos..."} />
             : <ProductList category={category} products={data}/>    
            }
        </>
    )
}