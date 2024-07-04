// String handbook

// String: length,indexOf(),lastIndexOf(),slice(),substring(),replace(),split(),trim(),toUpperCase(),toLowerCase() etc.


// Length

function getLength(str){
    console.log("string is " + str)
    console.log("length of string is " + str.length)
}

getLength("Hello world")


// indexOf

function findIndexOf(str,target){
    console.log("index of " + target + " is " + str.indexOf(target))
}

findIndexOf("hello world", "w");


// lastIndexOf()

function findLastIndexOf(str,target){
    console.log("last index of " + target + " is " + str.lastIndexOf(target))
}

findLastIndexOf("hello world","l")

// slice()

function getSlice(str,from,to){
    console.log("slice of " + str + " " + from + " " + to + " is " + str.slice(from,to))
}

getSlice("hello world",1,5)

// substring()

function getSubstring(str,src,target){
    console.log("sub string is " + str.substring(src,target+1))
}

getSubstring("hello world",2,5)

// replace()

function replaceString(str,target,replacement){
    console.log(str.replace(target,replacement))
}

replaceString("hello world","world","javascript")

// split()

function splitString(str,delemeter){
    console.log(str.split(delemeter))
}

splitString("hello,world,javascript",",")

// trim

const value = " hello world ";
console.log(value.trim())

//toUpperCase()

const my_name = "himanshu kumar singh";

console.log(my_name.toUpperCase())

// toLowerCase();


const my_name_2 = "HIMANSHU KUMAR SINGH";

console.log(my_name_2.toLocaleLowerCase())