//arrays destructuring
let fruits = ['apple', 'banana']
let [a, b] = fruits //a y b son valores que quiero conocer que estan en el array fruits
let [,fruit] = fruits;
console.log(a, b)
console.log(a, fruits[1])
console.log(a, fruit)

//objects destructuring

let user = { username: 'justin', age: 23}
let { username, age } = user    //username y age es algo que quiero conocer que esta en user
console.log(username, user.age)

//spread operator

let person = { username: 'justin', age: 23}
let country = 'mex'
let data = { id: 1, ...person, country }
console.log(data)

//rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(1, 1, 2, 3, 4, 5)