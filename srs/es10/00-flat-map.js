//flat
const array = [1, 2, 3, 4, 5, [1, 2, 3, 4, [1, 2, 3]]]
console.log(array.flat(3))
//salida de consola
/*
[
  1, 2, 3, 4, 5,
  1, 2, 3, 4, 1,
  2, 3
]
*/

//flatmap
const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(c => [c, c*2 ])) //podemos poner cualquier logica dentro del callback
//salida de consola
/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/