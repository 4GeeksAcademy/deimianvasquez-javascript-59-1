/*

    roma --> amor
    Clint east wood --> old west action

    Enumciado: 

    El reto es crear una función que reciba dos strings y determine si son anagramas.
    Guía de la Clase: Anagramas en JavaScript
    Aquí tienes una guía paso a paso para presentar el problema a tus estudiantes. 
    La idea es que lleguen a la solución con tu ayuda, promoviendo el pensamiento lógico.

*/

/*
    Planteamiento:
        - Comparar los strings
        - Que tengan las mismas letras 
        - Tratar los datos 
*/


// SOLUCIÓN DEIMIAN
// function esAnagrama(strOne, strTwo){

//     strOne = strOne.toLowerCase().replaceAll(" ", "").split("").sort().join("")
//     strTwo = strTwo.toLowerCase().replaceAll(" ", "").split("").sort().join("")

//     if(strOne == strTwo){
//         return true
//     }else{
//         return false
//     }



// }
function esAnagrama(strOne, strTwo) {
    strOne = strOne.toLowerCase().replaceAll(" ", "").split("").sort().join("");
    strTwo = strTwo.toLowerCase().replaceAll(" ", "").split("").sort().join("");

    return strOne == strTwo;
}

console.log(esAnagrama("hola", "amor"))
console.log(esAnagrama("Cl   DDintea       st wood", "old west action"))