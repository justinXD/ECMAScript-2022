const promise1 = new Promise((resolve, reject) => {
    reject('Reject')
})
const promise2 = new Promise((resolve, reject) => {
    resolve('Resolve')
})
const promise3 = new Promise((resolve, reject) => {
    resolve('Resolve2')
})

Promise.any([promise1, promise2, promise3]) //any devuelve la primera promesa que se resuelva
    .then(Response => console.log(Response))