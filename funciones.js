// function sum(num1 = 0, num2 = 0) {
//     let result = num1 + num2
//     return result
// }

// function sum(...args) {
//     let result = 0

//     for (let num of args) {
//         result = result + num
//     }
//     return result
// }





// const saludarArr = (name="arrow") => {
//     let result =  `Hola ¿qué tal ${name}?`
//     return result
// }

// // console.log(saludarArr("Juanita"))


// let randomNum = Math.ceil(Math.random()*10)
// // console.log(randomNum)

// let names = ["Deimian", "Marta", "María", "Deimian"]

// for (let name of names){
//     console.log(name)
//     if(name == "Deimian"){
//         // return
//     }
// }

// console.log(Math.sqrt(179))


// console.log(sum(58,96,1988)) // ejecutamos la funcion
// console.log(saludar("Juan"))
// console.log(saludar("Daniela"))
// console.log(saludar())


// console.log(sum(10, sum(20, sum(20,50,60))))

console.log(multy(3,8))
const multy = (num1, num2) =>  1 * num2 // funcion de expresión 


// hoisting
console.log(saludar("Juanita"))
function saludar(name = "usuario") {
    let result = `Hola ¿qué tal ${name}?`
    return result
}