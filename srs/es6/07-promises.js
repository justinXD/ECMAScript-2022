const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Resuelto!')
        }else{
            reject('Rechazado!')
        }
    })
}

anotherFuntion()
    .then(Response => console.log(Response))
    .catch(err => console.log(err))