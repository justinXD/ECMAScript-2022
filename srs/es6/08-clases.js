//declaramos una clase
class User {

}

class user {
    //metodos
    greetings(){
        return 'Holaa!'
    }
}

const gndx = new user()
console.log(gndx.greetings())

const bebeshita = new user()
console.log(bebeshita.greetings())

///constructor
class user {
    //constructor
    constructor(){
        console.log('Nuevo Usuario')
    }
    greetings(){
        return 'Holaa!'
    }
}

const papu = new user()

//this

class user {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Holaaaa!'
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }
}

const papirrin = new user('paripprin');
console.log(papirrin.greetings())

//setter y getter

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    //metodos
    speak(){
        return 'Hola!!!'
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const dev = new user('alex', 20);
console.log(dev.uAge);  //get
console.log(dev.uAge = 21); //set