function factorial(n){
    let fac = 1
    for(let c = n; c > 1; c--) {
        fac *= c
    }
    return fac
}

console.log(factorial(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120