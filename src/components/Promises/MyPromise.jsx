const MyPromise = () => {

    const promesa = new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve('La condición se cumple');
        } else {
            reject('La condición no se cumple');
        }
    });

    // promesa
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error));

    const resolvePromise = async () => {
        try {
            
            const response = await promesa
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            PROMESA
        </div>
    );
}

export default MyPromise;
