import { useState } from "react";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <section>
            <h6>ItemListContainer</h6>
        </section>
    );
}

export default ItemListContainer;
