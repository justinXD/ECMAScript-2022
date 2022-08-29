let hello = 'Hello'
let world = 'world'
let fraseEpica = `${hello} ${world}!`    //template literals, nos permite concatenar de una forma mas facil
console.log(fraseEpica) //salida de consola: Hello world!

//en ES6 ya no es necesario usar el ; al final de las lineas. se recomienda usarlo si la logica del programa es compleja.
//podemos tambien hacer saltos de linea sin tener que usar \n o el tab sin usar el \t
let otraFrase = `esta va a ser una linea
    y aqui va a estar la otra linea`
console.log(otraFrase)
//el template literal solo funciona con estas comillas: `` (comillas francesas)