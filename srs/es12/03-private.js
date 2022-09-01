class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    //metodos
    #speak(){   //el # nos hace privado el metodo o la propiedad de la clase
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