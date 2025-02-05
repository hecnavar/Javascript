// Desarrollo
// Nuestro código tiene una pequeña falla, el día sólo tiene 24 horas y no se está tomando en cuenta el caso en el que time sea una hora inválida.

// Utilizando lo visto hasta el momento sobre operadores lógicos y condicionales, debes crear un nuevo mensaje que será usado cuando time sea una hora que no existe en el día.



// MY SOLUTION: 
let time = 25;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time <= 24) {
  greeting = "Good evening";
}
else {
    console.log('Hora invalida')
}

console.log(greeting) // Good afternoon

//THE SOLUTION
// var time = 27;
// var greeting;

// if (time >= 0 && time < 12) {
//   greeting = "Good morning";
// } else if (time >= 12 && time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20 && time < 24) {
//   greeting = "Good evening";
// } else {
//   greeting = "Unknown hour";
// }

// console.log(greeting) // Unknown hour