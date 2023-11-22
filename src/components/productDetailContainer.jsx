import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { filterIdProduct } from "../assets/js/products";
import ProductDetail from "./productDetail";

const ProductDetailContainer = () => {

    const { idProduct } = useParams()

    const [product, setProduct] = useState(null)
    const [loadingData, setLoadingData] = useState(true)

    const getData = () => {

        const response = filterIdProduct(parseInt(idProduct))
        response.then(result => {
            setProduct(result)
            setLoadingData(false)
        })

    }

    useEffect(() => {

        getData()

        return () => {
            setProduct(null)
            setLoadingData(true)
        }
    }, [])



    return (
        <section className="col-4 mx-auto">
            {
                loadingData ? <h2>Cargando producto . . .</h2> : <ProductDetail {...product}/>
            }
        </section>
    );
}

export default ProductDetailContainer;
