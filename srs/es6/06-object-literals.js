//enahced object literals

function newUser(name, age, country, uId) {
    return {
        name,   //forma de asignar valor a una propiedad de un objeto en una funcion en ES6
        age,
        country,
        id: uId //forma de asignar valor a una propiedad de un objeto en una funcion en ES5
    }
}

console.log(newUser('justin', 23, 'MX', 1))