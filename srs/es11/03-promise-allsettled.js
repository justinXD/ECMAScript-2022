const promise1 = new Promise((resolve, reject) => {
    resolve('Reject')
})
const promise2 = new Promise((resolve, reject) => {
    resolve('Resolve')
})
const promise3 = new Promise((resolve, reject) => {
    resolve('Resolve2')
})

Promise.all([promise1, promise2, promise3])  //allSettled ejecuta todas las promesas sean rechazadas o no 
    .then(response => console.log(response))        // y retorna un array de objetos con el estado de cada promesa


//promise.all retorna una promesa en forma de array con la respuesta de cada una de las promesas 
//si y solo si todas las promesas se cumplen