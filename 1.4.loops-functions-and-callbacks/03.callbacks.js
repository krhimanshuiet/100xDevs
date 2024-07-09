// callbacks

// find the sqaure of the input 

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

// find the sum of the sqaures of the inputs

function sumOfSquares(a,b){
    return square(a) + square(b);
}

function sumOfCubes(a,b){
    return cube(a) + cube(b);
}

console.log(sumOfSquares(10,20))
console.log(sumOfCubes(10,20))

function sumOfCalculations(a,b,fn){
    return fn(a) + fn(b);
}

console.log(sumOfCalculations(10,20,square))
console.log(sumOfCalculations(10,20,cube))

// anonymous function -> function does not have a name

console.log(sumOfCalculations(10,20,function(a){
    return a*a*a*a;
}))