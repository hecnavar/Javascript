// Reto 1: Calcular promedio
// Objetivos
// Implementar adecuadamente los conceptos vistos hasta el momento de funciones y ciclos para solucionar un problema.

// Requisitos
// N/A

// Desarrollo
// Completar la función calculateAverage la cual recibe numbers, un arreglo de n cantidad de enteros. La función debe retornar el promedio de todos los enteros que tenga numbers.


//MI INTENTO
// function calculateAverage(numbers){

//   for (let i = 0; i <numbers.lengt; i++){
//         let sum = sum + numbers[i];
//         let prom = sum/numbers.lenght;
//   }
//   return prom;
// }

// console.log(calculateAverage([9,4,6,8,1,2,4,5,6]));



function calculateAverage(numbers){
  let sum = 0
  for (let i = 0; i <numbers.length; i++){
        sum += numbers[i];
  }
  let prom = sum / numbers.length;
  return prom;
}

console.log(calculateAverage([9,4,6,8,1,2,4,5,6]));