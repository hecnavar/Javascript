// Reto 1: Vectores
// Objetivos
// Crear un constructor, agregar métodos al prototype e instanciar múltiples objetos a partir de dicho constructor.

// Requisitos
// N/A

// Desarrollo
// Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, ambos valores numéricos que deben ser las propiedades del objeto.

// Agregar los siguientes métodos al prototype de Vec:

// plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

// minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

// length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).

// let Vec = function(x, y) {
//   ...
// }

// let vec1 = new Vec(1, 2);
// let vec2 = new Vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979

///--MI SOLUCIÓN-----------------------NO FUNCIONA

// let Vec = function(x, y) {
//   this.x = x;
//   this.y = y
// }

// Vec.prototype.plus = function (xplus, yplus){
//   this.xplus = xplus;
//   this.yplus = yplus;

//   let sumx = this.x + xplus; 
//   let sumy = this.y + yplus

//   return sumx, sumy
// }

// let vec1 = new Vec(1, 2);
// // let vec2 = new Vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979


//---------------LA SOLUCIÓN DE LA IA
let Vec = function(x, y) {
  this.x = x;
  this.y = y;
}

Vec.prototype.plus = function (otherVec) {
  // Asegúrate de que otherVec sea una instancia de Vec
  if (!(otherVec instanceof Vec)) {
    throw new Error("Argument must be an instance of Vec");
  }

  let sumx = this.x + otherVec.x; 
  let sumy = this.y + otherVec.y;

  return new Vec(sumx, sumy); // Devuelve un nuevo objeto Vec
}

let vec1 = new Vec(1, 2);
let vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Salida: Vec { x: 3, y: 5 }


//-----------------SOLUCIÓN BEDU 

var Vec = function(x, y) {
  this.x = x;
  this.y = y;
}

Vec.prototype.plus = function(other) {
  return new Vec(this.x + other.x, this.y + other.y);
}

Vec.prototype.minus = function(other) {
  return new Vec(this.x - other.x, this.y - other.y);
}

Vec.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}