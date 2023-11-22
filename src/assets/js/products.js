
const products = [
    { id: 1, name: 'Camisa'   , descripcion: 'Una camisa'   , precio: 19000, categoria: 'ropa'      , stock: 4},
    { id: 2, name: 'Corbata'  , descripcion: 'Una corbata'  , precio: 12000, categoria: 'accesorios', stock: 8},
    { id: 3, name: 'Pantalón' , descripcion: 'Un pantalón'  , precio: 29000, categoria: 'ropa'      , stock: 6},
    { id: 4, name: 'Zapatilla', descripcion: 'Una zapatilla', precio: 75000, categoria: 'calzado'   , stock: 3},
    { id: 5, name: 'Zapato'   , descripcion: 'Un zapato'    , precio: 65000, categoria: 'calzado'   , stock: 2},
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve( products )
            }, 3000);
        } else {
            reject("No se encontraron productos!")
        }
    })
}

export const filterIdProduct = id => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            const product = products.find(product => product.id === id);

            if (product) {
                setTimeout(() => {
                    resolve( product )
                }, 1000);
            } else {
                reject("El producto no existe!")
            }

        } else {
            reject("No se encontraron productos!")
        }
    })
}

export const filterCategoryProduct = categoria => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            const filterProducts = products.filter(product => product.categoria === categoria);

            if (filterProducts) {
                setTimeout(() => {
                    resolve(filterProducts)
                }, 1000);
            } else {
                reject("El producto no existe!")
            }

        } else {
            reject("No se encontraron productos!")
        }
    })
}