// 3.why js >> other languages in some use-cases
/*
Browsers can only understand HTML,CSS,JS (not technicaly true) 
thanks to node js , js can also be used for backend development
*/
console.log("hello world")

// 6.simple primitives in JS (number,string,booleans).

// variables (var,let and const)
// var
var a = 1;
a = 2;
console.log(a)
// let
let b = 2;
b = 3;
console.log(b)
// const 
const c = 4;
// c = 5;  gives error 
console.log(c);

// data types 

let first_name = "Himanshu Kumar Singh";
let age = 18;
let is_married = false;

console.log("this persion name is " + first_name + " and his name is " + age )

// if / else

if(is_married){
    console.log(first_name + " is married")
}
else{
    console.log(first_name + " is not married")
}

// loops 
// write a programm to sum of numbers from 0 to 100
let count = 0;
for(let i = 1 ; i <= 100 ; i++){
    count += i;
}
console.log(count)

// 7.complex primitives in JS (Number,String).

const persons = ["ram","krishna","shyam","shiva"];

console.log(persons[0])
console.log(persons[1])
console.log(persons[2])
console.log(persons[3])

const ages = [12,45,23,67,8,90];

for(let i = 0 ; i < ages.length ; i++){
    const even_age = ages[i] % 2 == 0 ? ages[i] : "odd age"
    console.log(even_age)
}

const users = [1,2,3,4]
const users2 = ["ram","krishna"]
// objects
const user1 = {
    name:"himanshu",
    gender:"male"
}

const all_gods = [
    {firstname:"ram",gender:"male"},
    {first_name:"sita",gender:"female"},
    {first_name:"krishna",gender:"male"},
    {first_name:"radha",gender:"female"}
]

console.log(user1.name + " is " + user1.gender)

// functions 

// sum of two numbers

function find_sum(a,b,display_fn){
    const sum = a+b;
    display_fn(sum)
}

find_sum(23,45,display_passive);

// functions can take other functiions as argument called callbacks 

function display_active(sum){
    console.log("result of the sum is " + sum)
}

function display_passive(sum){
    console.log("sum's result is " + sum)
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function calculateArithmetic(a,b,arithmetic_fn){
    const result = arithmetic_fn(a,b);
    return result
}

console.log(calculateArithmetic(90,89,sum));
console.log(calculateArithmetic(90,89,sub));


function greet(name){
    console.log("hello world "  + name);
}

setTimeout(greet,500,"Himanshu");

