import { useEffect, useState } from "react"
import { getProducts } from "../../products"
import Card from "../Card/card";

const MyMap = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const allProducts = getProducts()

    useEffect(() => {
        
        getProducts()
            .then(response => setProducts(response))
            .catch(error => console.log(error))

    }, []);

    useEffect(() => {
        
        if (products.length > 0) {
            setIsLoading(false)
        }

    }, [products]);

    return (
        <div>
            {
                isLoading
                ? <h6>Cargando productos ...</h6>
                : products.map( (item) => <Card key={item.id} name={item.name} description={item.descripcion} stock={item.stock}/>)
            }
        </div>
    )
}

export default MyMap
