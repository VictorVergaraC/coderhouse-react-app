const products = [
    { id: 1, name: 'Camisa'   , descripcion: 'Una camisa', stock: 4},
    { id: 2, name: 'Corbata'  , descripcion: 'Una corbata', stock: 8},
    { id: 3, name: 'Pantalón' , descripcion: 'Un pantalón', stock: 6},
    { id: 4, name: 'Zapatilla', descripcion: 'Una zapatilla', stock: 3},
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