/*
* CleaningLoder Component: renderiza un spinner con el titulo de la accion que esta ocurriendo
*/

import Loader from 'react-loader-spinner';
import React from 'react';

export const CleaningLoader = React.memo(({ title }) => {
    return (
        <>
            <section className="container my-5 text-center text-primary">
                <h4>{title}</h4>
                <br />
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />            
            </section>            
        </>
    )
})