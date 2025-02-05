let i = 0
while (i<=50){
    if (i % 2 === 0){
        console.log('El numero es par');
    }
    else{
     
        console.log('EL numero de impar');
    }
    i++;
}

//IF AND ELSE
let time = 13;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting) // Good afternoon

//SWITCH
let day = 2;
let text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

console.log(text); // Tuesday


// FOR
for(let i = 0; i<=5; i++){
    console.log("Hello World");
  }