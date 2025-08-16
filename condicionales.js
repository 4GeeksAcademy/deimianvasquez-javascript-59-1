// // if (condición) {
// //  Ejecuta el code  
// //
// //}else {
// //  ejecuta en caso de ser negatívo   
// //
// // }

// const shirt = "azul"
// let selection = " Azul " // 

// if (shirt != selection.toLowerCase().trim()) {
//     console.log("Las camisas son distintas")
// } else {
//     console.log("Las camisas son igualitasssss")

// }

// // condicional --> redux 
// let weekday = 'fridy';

// switch (weekday) {
//     case "monday":
//         console.log("Inicia la semana");
//         break

//     case "friday":
//         return console.log("Vamos de fiestaaaaaaa!!!!");

//     default:
//         console.log("Es otro día común");
// }

let sientoQueMeAtropelloUnTren = false;
let meAtropelloUnTren = true;


// // if (sientoQueMeAtropelloUnTren == true) {

// //     if (meAtropelloUnTren == true) {
// //         console.log("No tienes gripe, te atropello un tren");
// //     } else {
// //         console.log("Tienes gripe, con una pastilla se te quita");
// //     }
// // } else {
// //     console.log("No tienes gripe, te atropello un tren");
// // }

// if (sientoQueMeAtropelloUnTren == false || meAtropelloUnTren == true) {

//     console.log("No tienes gripe");

// } else if (sientoQueMeAtropelloUnTren == true && meAtropelloUnTren == false) {

//     console.log("Tienes gripe, con una pastilla se te quita");

// } else {
//     console.log("NO se anda al hospital")
// }



// let person = 100
// if (person <= 10) {
//     console.log("precio es 100$")
// } else if (person <= 50) {
//     console.log("precio es 200$")
// } else if (person <= 150) {
//     console.log("precio es 300$")
// }
// else {
//     console.log("un dineral")
// }

let color = "azul"

// if (color == "red") {
//     console.log("MI color favorito")
// } else {
//     console.log("No me gusta el color")
// }

const flu = (sientoQueMeAtropelloUnTren && !meAtropelloUnTren) ? console.log(true) : console.log(false);
const result = (color == "red") ? console.log("Mi color favorito") : console.log("No me gusta el color")
