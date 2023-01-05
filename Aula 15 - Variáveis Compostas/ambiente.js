let num = [5, 8, 2, 9, 3]
//num[3] = 6
//num.push(7)
//num.length
num.push(1)
num.sort()
console.log(num)
console.log(`The vector has, ${num} position`)
console.log(`The first value of the vector is ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Value not found!')
} else {
    console.log(`The value 8 is in position ${pos}`)
}