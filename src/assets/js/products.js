const products = [
    { id: 1, name: 'Camisa'   , descripcion: 'Una camisa'   , categoria: 'ropa'      , stock: 4},
    { id: 2, name: 'Corbata'  , descripcion: 'Una corbata'  , categoria: 'accesorios', stock: 8},
    { id: 3, name: 'Pantalón' , descripcion: 'Un pantalón'  , categoria: 'ropa'      , stock: 6},
    { id: 4, name: 'Zapatilla', descripcion: 'Una zapatilla', categoria: 'calzado'   , stock: 3},
    { id: 5, name: 'Zapato'   , descripcion: 'Un zapato'    , categoria: 'calzado'   , stock: 2},
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve( products )
            }, 2000);
        } else {
            reject("No se encontraron productos!")
        }
    })
}