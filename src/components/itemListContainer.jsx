import { useEffect, useState } from "react";
import { getProducts } from "../assets/js/products";
import ProductItem from "./productItem";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Cargando productos . . .")

    const getData = () => {
        const response = getProducts()

        response.then(result => {
            setProducts(result)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
            setIsLoading(true)
            setLoadingMessage("Ha ocurrido un error, por favor, notificar.")
        })
    }

    useEffect(() => {
        getData()

        return () => {
            setProducts([])
            setIsLoading(true)
            setLoadingMessage("Cargando productos . . .")
        }
    }, [])


    return (
        <section className="d-flex flex-column gap-2">
            <h6>Item List Container</h6>
            <aside className="d-flex flex-sm-wrap gap-1">
                {
                    isLoading
                        ? <h4>{loadingMessage}</h4>
                        : products.map(product => <ProductItem key={product.id} {...product} />)
                }

            </aside>
        </section>
    );
}

export default ItemListContainer;
