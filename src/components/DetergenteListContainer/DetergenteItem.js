export const DetergenteItem = ({categoria, articulo, detalle, precio, img}) => {
    return (
        <div className="card col-3">
            <img src={img} alt={articulo}/>
            <h3>{articulo} $ {precio}</h3>
            <p>{detalle}</p>            
        </div>
    )
}