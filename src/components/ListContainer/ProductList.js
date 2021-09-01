import { ProductItem } from "./ProductItem"

export const ProductList = ({ category, products = [] }) => {
    return (        
        <section className="container my-5">
            <h2>{category ? category : "Todos los productos"}</h2>
            <hr/>
            <div className="row">
                {products.sort((a, b) => a.price > b.price ? 1 : -1).map((product) => <ProductItem key={product.id} {...product}/> )}
            </div>
        </section>
    )
}