import Loader from 'react-loader-spinner';

export const CleaningLoader = ({ title }) => {
    return (
        <>
            <section className="container my-5 text-center text-primary">
                <h4>{title}</h4>
                <br />
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />            
            </section>            
        </>
    )
}