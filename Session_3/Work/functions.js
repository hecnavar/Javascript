function calculateAge(birthYear) {
    let age = 2025 - birthYear;
    return age;
}

console.log(calculateAge(2000))

//EXAMPLE TWO

function yearsUntilRetirement(birthYear, name) {
    let age = 2025 - birthYear;
    let retirement = 65 - age;
    console.log('El nombre es: ' + name)
    return age, retirement;
}

console.log(yearsUntilRetirement(2000, 'Hector'))


///ANOTHER EXAMPLE

let whatDoYouDo = function(job, name) {
    switch (job) {
        case 'developer':
            return name + 'develops cool apps';
        case 'designer':
            return name + 'designs awesome websites';
        default:
            return name + ' Es un nini'
    }
}

console.log(whatDoYouDo('mesero', 'Héctor'))