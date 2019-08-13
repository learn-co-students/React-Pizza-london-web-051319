const pizzaURL = 'http://localhost:3000/pizzas'


const getPizzas = () => fetch(pizzaURL).then(res => res.json())

const updatePizzas = newPizza => fetch(pizzaURL + `/${newPizza.id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPizza)
}).then(res => res.json())

export default {
    getPizzas,
    updatePizzas
}