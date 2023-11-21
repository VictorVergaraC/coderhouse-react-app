import { useEffect, useState } from "react"
import { getProducts } from "../../products"
import Card from "../Card/card";

const MyMap = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        getProducts()
            .then(response => {
                setProducts(response)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

        return () => {
            setProducts([])
            setIsLoading(true)
        }

    }, []);

    return (
        <div>
            {
                isLoading
                ? <h6 className="m-5">Cargando productos ...</h6>
                : products.map( (item) => <Card key={item.id} name={item.name} description={item.descripcion} stock={item.stock}/>)
            }

        </div>
    )
}

export default MyMap
