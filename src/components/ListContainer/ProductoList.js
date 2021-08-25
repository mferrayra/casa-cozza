import { ProductoItem } from "./ProductoItem"

export const ProductoList = ({ categoria, productos = [] }) => {
    return (        
        <section className="container my-5">
            <h2>{categoria ? categoria : "Todos los productos"}</h2>
            <hr/>
            <div className="row">
                {productos.sort((a, b) => a.precio > b.precio ? 1 : -1).map((producto) => <ProductoItem key={producto.id} {...producto}/> )}
            </div>
        </section>
    )
}