// Reto 2: Número mayor
// Objetivos
// Implementar adecuadamente los conceptos vistos hasta el momento de funciones y ciclos para solucionar un problema.

// Requisitos
// Haber terminado el reto 1.

// Desarrollo
// Completar la función getLargerInt la cual recibe dos números enteros. La función debe retornar el número mayor.

// function getLergerInt(number1, number2) {
//   ...
// }


//Mi intento
function getLargerInt(number1, number2){
  if (number1 > number2){
    return number1;
  }
  else if (number1 < number2){
    return number2;
  }
  else if (number1 == number2){
    return message = 'Ambos numeros son iguales'
  }
  else {
    return message = 'No se han ingresado correctamente los dos numeros' 
  }
}

console.log(getLargerInt(2,4))


//Solución Mejorada
function getLargerInt(number1, number2) {
  // Validación de entradas
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    throw new Error('Ambos argumentos deben ser números.');
  }

  if (number1 > number2) {
    return number1; // Retorna el número mayor
  } else if (number1 < number2) {
    return number2; // Retorna el número mayor
  } else {
    return 'Ambos números son iguales'; // Mensaje si son iguales
  }
}

// Definición de variables
let a = 5;
let b = 10;

console.log(getLargerInt(a, b)); // Salida: 10


//SOLUCIÓN SUGERIDA
function getLergerInt(number1, number2) {
  if(number1 > number2) {
    return number1
  } else {
    return number2
  }
}