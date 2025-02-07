// Objetivos
// Dominar el uso de ciclos y operadores lógicos.

// Requisitos
// Haber terminado el reto 2.

// Desarrollo
// Crear un ciclo desde 0 hasta 100.
// Mostrar todos los números primos en este ciclo con console.log()
// Un número primo es número natural mayor a 1 que sólo es divisible entre 1 y sí mismo.

//MI solución
// for(let i=0; i<=100; i++){
//   for(let k=0; k<=100; k++){
//     if ((i/k)==0 ){
//       console.log('Yo soy un numero primo: '+ i)
//     }
//   }
// }

//The solution:

for (let counter = 2; counter <= 100; counter++) {
  var isPrime = true;

  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      isPrime = false;
    }
  }

  if(isPrime) {
    console.log(counter);
  }
}