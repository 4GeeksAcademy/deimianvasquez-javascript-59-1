/*
1. Par o impar (fácil)

Enunciado:
Escribe una función que reciba un número como parámetro y determine si es par o impar.
La función debe imprimir un mensaje en consola indicando el resultado.

📌 Ejemplo:
Entrada: 4 → Salida: "4 es par"
Entrada: 7 → Salida: "7 es impar"

*/

/*
    1.- crear la funcion que recibe el parametro colocal nombre 
    2.- saber como sacar el número par (división) / 2  entero par impar
*/

const numberOdd = (num = 1) => {
    // if (typeof (num) != "number") return `Debe colocar un número válido`

    // if (num % 2 == 0) return `${num} es par`

    // return `${num} es impar`

    return typeof (num) !== "number" ?
        `Debe colocar un número válido` :
        num % 2 == 0 ?
            `${num} es par` :
            `${num} es impar`

}


console.log(numberOdd(11))


/*
2. Suma de números hasta N (fácil)

Enunciado:
Crea una función que reciba un número entero positivo n y calcule la suma de todos los números desde 1 hasta n.
La función debe mostrar la suma en consola.

📌 Ejemplo:
Entrada: 5 → Salida: "La suma es: 15"

*/

// const sumTotal = (num) => {
//     let total = 0 // aux


//     if (typeof (num) != "number" || num < 0) return "Debe ser un número entero y positivo"

//     /*
//         total = 0
//         total --> 0 = 0 + 1
//         total --> 1 = 1 + 2

//     */

//     for (let i = 1; i <= num; i++) {
//         total = total + i
//     }

//     return total
// }

// console.log(sumTotal(3))



/*
5. FizzBuzz (difícil)

Enunciado:
Escribe una función que imprima en consola los números del 1 al n, pero:
Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
En cualquier otro caso, imprime el número.

📌 Ejemplo:
Entrada: 15 → Salida:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

*/


// function fizzBuzz(num) {
//     if (typeof (num) != "number" || num < 0) return "Debe ser un número entero y positivo"

//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz")
//         } else if (i % 5 == 0) {
//             console.log("Buzz")
//         } else if (i % 3 == 0) {
//             console.log("Fizz")
//         } else {
//             console.log(i)
//         }
//     }

// }

// fizzBuzz(50)



//POTR HACER

/*
3. Invertir una cadena (medio)

Enunciado:
Haz una función que reciba un texto y devuelva ese mismo texto pero al revés.
La función debe imprimir el resultado en consola.

📌 Ejemplo:
Entrada: "Hola" → Salida: "aloH"

*/