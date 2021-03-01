//Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta

const findOrderOfBreads = () => {
    const result = filterOrdersByType({ type: 'ingredients', filter: 'lechuga','palta'})
}

//Función que me permita encontrar una orden a través del id y 
//que me indique si la orden incluye pepinillos entre sus ingredients, debería devolver un true|false como respuesta.
const findOrderOfingredients = (id) => {
    const result = filterOrdersByType({ type: 'ingredients', filter: 'pepinillos'})
                    .find(sandwichOrder => sandwichOrder.id === id)
    if(result){
        return true
    }
    return false
}
