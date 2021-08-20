import React, { useEffect, useState } from 'react'
import { getDetergentesLiquidos } from '../../helpers/getDetergentesLiquidos'
import { DetergenteList } from './DetergenteList'

export const DetergenteListContainer = () =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect( ()=> {
        setLoading(true)

        getDetergentesLiquidos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [])


    return (
        <>
            {loading 
             ? <h2>Cargando...</h2>
             : <DetergenteList detergentes={data}/>    
            }
        </>
    )
}