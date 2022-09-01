try {
    hello()
} catch (error) {
    console.log(error)
}

try{
    hello()
} catch {
    console.log('Esto es un error')
}