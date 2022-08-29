//default params en common JS
function newUser(name, age, country) {
    var name = name || 'Justin'
    var age = age || 23
    var country =  country || 'MX'
    console.log(name, age, country)
}

newUser();
newUser('juampa', 30, 'ARG')

//default params en ES6

function newAdmin(name = 'oscar', age = 35, country = 'CO') {
    console.log(name, age, country)
}

newAdmin()
newAdmin('pablito', 40, 'EU')
