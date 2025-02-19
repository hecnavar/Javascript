

//Ejemplo 1 Creando un constructor con una función constructora para crear objetos
let Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

let john = new Person('John', 1990, 'Developer');

let mark = new Person('Mark', 1985, 'Teacher');

let jane = new Person('Jane', 1975, 'Designer');

console.log( john );
console.log( mark);
console.log(jane);

//Ejemplo dos heredando propiedades
let Person2 = function(name){
    this.name = name;
}

let john2 = new Person2('John');

// let Developer = function(skills, yearsOfExperience) {
//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;
// }

//Ahora necesitamos la propiedad del name que tiene la persona, usando el metodo call, quedando de la siguiente forma
let Developer = function(name, skills, yearsOfExperience) {
    Person2.call(this, name);

    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

let john3 = new Developer('John3', 'JavaScript', 10);

console.log(john3)

//EJEMPLO 3 HEREDANDO  METODOS VAMOS A CALCULAR LA PENSIÓN DE UNAS PERSONAS.

let Person3 = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

  Person3.prototype.calculateAge = function() {
    let today = new Date();
    let year = today.getFullYear();
  
    console.log( year - this.birthYear );
  }

  var john4 = new Person3('John', 1990, 'Developer');

  var mark4 = new Person3('Mark', 1985, 'Teacher');
  
  var jane4 = new Person3('Jane', 1975, 'Designer');

john4.calculateAge();

mark4.calculateAge();

jane4.calculateAge();

console.log(john4)
console.log(mark4)
console.log(jane4)