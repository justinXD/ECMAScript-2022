var lastName = 'David';  //declarar y asignar
lastName = 'oscar'; //reasignar
console.log(lastName);  //la consola nos imprime oscar

let fruit = 'apple';    //se recomienda usar let en lugar de var
fruit  = 'kiwi';    //let nos permite la reasignación
console.log(fruit);

const animal = 'dog';
animal = 'cat'; //const no permite reasignacion
console.log(animal);    //esta linea nos da un error

const fruits = () => {
    if (true) {
        var fruit1= 'apple';    //function scope, vive dentro de la funcion
        let fruit2 = 'kiwi';    //block scope, solo vive dentro de este bloque
        const fruit3 = 'banana';    //block scope, solo vive en este bloque
    }
    console.log(fruit1);    //solo esta variable es accesible porque su alcance es de funcion
    console.log(fruit2);
    console.log(fruit3);
}
fruits();