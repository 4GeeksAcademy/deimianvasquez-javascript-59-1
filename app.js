//  console.log("Validamos los errores, corrio con exito")

/*
    12 pasos pasos para cambiar un bombillo, diagrama de flujo de datos

    1.- validar si esta dañado
    2.- buscar una escalera y tener acceso al bombillo dañado 
    3.- desenrroscamo el bombillo

*/

// Variables:
// Solo pueden guardar un tipo de datos

// var name = "Deimian" // declarar la variable
// let lastname = "Vásquez"
// const PI = 3.1416
// const names = ["Juan", "Pedro"] // no se puede reasignar


// console.log(typeof(PI))
// console.log( lastname, name, PI)
// console.log(names)

// var name = "Deimian Vásquez"

// var name = "Juanita Vargas"
// // (scope) { }

// if(true){
//     var edad = 10
// }
// console.log(edad)
// console.log(name)


// let name = "Deimian Vásquez"
// const age = 10

// // si respeta scope {}

// let country = " Venezuela"
// country = "Colombia"

// if(true){
//     let country = "Candamandapio"
//     console.log(country)
// }

// console.log(country)
// console.log(age)

// let num1 = 15
// let num2 = 10
// let result = num1+num2

// Convención de escritura
// PascalCase --> escribir clases Math 
// Variables, funciones o todo lo demas --> camelCase

// let nombreApellido = "Deimian Vásquez Delgado"
// let profesion = "Developer"
// let age = 19

// nombreApellido = nombreApellido.toUpperCase()
// nombreApellido = nombreApellido.replaceAll(" ", "")
// console.log(nombreApellido.length)

// console.log("Mi nombre es " + nombreApellido+ ", soy "+ profesion+" y tengo "+ age+ " \"años\" de edad.")

// console.log(`Mi nombre es ${nombreApellido}, soy ${profesion} y tengo ${age} "años" de edad.`)


// let num1 = 150
// let num2 = "150"
// let nombre = null

// console.log(Number(num1) + Number(num2), nombre)

// function sum() {
//     return 1 + 1
// }

// console.log(sum())


// let names = ["Nombre", 10, true, {"pets":"cats"}, ["hola"]]

// console.log(Array.isArray(names))

// humano 1
let humanOne = {
    name: "Deimian",
    lastName: "Vásquez",
    gender: "male",
    age: 10,
}

// humano 2 
let humanTwo = {
    "name" : "Marta",
    "lastName" : "Fagúndez",
    "gender" : "female",
    "bitrhDate" : "23/02/1988"
}

let dateNow = new Date()
// console.log(dateNow.toLocaleDateString())
humanTwo["pets"] = ["Cat", "Dog"]
humanTwo["age"] = 25
delete humanTwo["name"]

// console.log(humanTwo)


// let numOne = 15
// let numTwo = "15"
// let password = "1234567"// db
// let username ="deimian"// db
// let age = 18
// // == compara valor 
// // === compara el valor y tipo de dato
// // console.log(numOne === numTwo)


// // console.log(password != "123456")
// if( age >= 18){
//     console.log("tiene acceso")
// }else{
//     console.log("Negada la visa...")

// }

// console.log(10 > 11 && "azul" == "azul") // AND 
// console.log("blanco" == "azul" && 18 == 18) //


// console.log("blanco" == "azul" || 18 == 18) // OR 


// console.log(!false)