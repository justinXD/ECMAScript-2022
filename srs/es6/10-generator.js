function* iterate(array){
    for (const value of array) {
        yield value
    }
}

const it = iterate(['justin', 'jabs', 'julio', 'vargas', 'victor']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)    //una vez se acaben los elementos del array la salida sera undefined
console.log(it.next().value)