var age = 67
console.log(`You have ${age} years old`)
if (age < 16) {
    console.log(`Don't vote`)
} else if (age < 18 || age > 65) {
        console.log(`Optional vote`)
}else {
    console.log(`Compulsory vote`)
}