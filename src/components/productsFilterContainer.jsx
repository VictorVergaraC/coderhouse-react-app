import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { filterCategoryProduct } from "../assets/js/products";
import ProductItem from "./productItem";

const ProductsFilterContainer = () => {

    const { category } = useParams()

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        const response = filterCategoryProduct(category)
        response.then(result => {
            setProducts(result)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(true)
        })
    }

    useEffect(() => {
        getData()

        return () => {
            setProducts([])
            setIsLoading(true)
        }
    }, [category])


    return (
        <section className="d-flex flex-sm-wrap gap-1">
            {
                isLoading
                    ? <h4>Cargando productos . . .</h4>
                    : products.map(product => <ProductItem key={product.id} {...product} />)
            }
        </section>
    );
}

export default ProductsFilterContainer;
