// Reto 1: Potenciación
// Objetivos
// Implementar adecuadamente los conceptos vistos hasta el momento de funciones y ciclos para solucionar un problema.

// Requisitos
// N/A

// Desarrollo
// Crear una función power que recibe dos argumentos base y exponent. La función debe retornar el resultado de elevar base a la potencia exponent.

// function power(base, exponent) {
//   ...
// }
// Recuerda que en la potenciación el exponent indica cuántas veces se debe multiplicar base por sí mismo.


//MI intento
function power (base, exponent) {
  do {
  result = base * base;
  exponent = exponent- 1;
  } while (exponent == 0)
  return result
}

console.log(power(2,3))

//Solución corregida y mas pro
function power(base, exponent) {
  let result = 1; // Initialize result to 1
  while (exponent > 0) { // Continue while exponent is greater than 0
    result *= base; // Multiply result by base
    exponent--; // Decrease exponent by 1
  }
  return result; // Return the final result
}

console.log(power(2, 3)); // Output: 8

//Solución código
function power(base, exponent) {
  var result = 1;

  for(var i = 0; i < exponent; i++) {
    result *= base; // Same as: result = result * base;
  }

  return result;
}