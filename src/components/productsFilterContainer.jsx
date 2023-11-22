import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { filterCategoryProduct } from "../assets/js/products";

const ProductsFilterContainer = () => {

    const { category } = useParams()

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        const response = filterCategoryProduct(category)
        response.then(result => {
            console.log(result)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])


    return (
        <div>

        </div>
    );
}

export default ProductsFilterContainer;
