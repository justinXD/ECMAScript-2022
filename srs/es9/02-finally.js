const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Resuelto!')
        }else{
            reject('Rechazado!')
        }
    })
}

anotherFuntion()
    .then(Response => console.log(Response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finnaly!!'))