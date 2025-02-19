// EJEMPLO 1

// let car = {
// 	brand: 'Nissan',
// 	model: 'Sentra',
// 	year: 2020
// }

// function addColor(car) {
//   let newCar = Object.assign({}, car, {
//     color: 'Black'
//   });

//   return newCar;
// }

// console.log('Before calling addColor()', car);

// let newCar = addColor(car);

// console.log('After calling addColor()', car);
// console.log('After calling addColor()', newCar);

// console.log('Same car?', car === newCar); // false


// EJEMPLO 2

// function addColor(car) {
//   let newCar = Object.assign({}, car, {
//     color: 'Black'
//   });

//   return newCar;
// }

// let cart = [
//   {
//     item: 'Laptop',
//     quantity: 1
//   }
// ]


// function addItemToCart(cart, item, quantity) {
//   let newCart = cart.map(function(element) {
//     return element;
//   });

//   newCart.push({
//     item: item,
//     quantity: quantity
//   })

//   return newCart;
// }

// cart = addItemToCart(cart, 'Phone', 1);

// console.log(cart);


// EJEMPLO 3

let number = 12345;

let string = number.toString();

let array = string.split('');

console.log(number); // 12345
console.log(string); // '12345'
console.log(array); // ['1', '2', '3', '4', '5']


var arrayOfNumbers = array.map(Number);

console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

let sum = arrayOfNumbers.reduce(function(a, b) {
  return a + b;
}, 0);

console.log(sum); // 15

function sumDigits(number) {
  return number
         .toString()
         .split('')
         .map(Number)
         .reduce(function(a, b) {
           return a + b;
         }, 0)
}

console.log(sumDigits(12345)); // 15