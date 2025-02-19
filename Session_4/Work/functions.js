// Desarrollo
// Vamos a crear una función que reciba como argumento un arreglo con n cantidad de enteros, dicha función debe retornar un nuevo arreglo con todos los elementos del primer arreglo multiplicados por dos.


//EJEMPLO 1
[1, 3, 4, 7, 2, 1, 9, 0]  // Arreglo inicial

function multiplyByTwo(numbers) {
    let multipliedNumbers = [];

    for(let i = 0; i < numbers.length; i++) {
      multipliedNumbers.push(numbers[i] * 2);
    }

    return multipliedNumbers;
}

//EJEMPLO 2
const car = {
    brand: 'Nissan',
    model: 'Versa',
    year : '2025'
}

function keyValuePairs(obj) {
    let keys = Object.keys(obj);
    let pairs = [];

    for(let i = 0; i < keys.length; i++) {
        pairs.push([keys[i], Obj[keys[i]]])
    }
    return pairs
}

let result = keyValuePairs(car)