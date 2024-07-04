// Array Handbook

//Array: push(),pop(),shift(),unshift(),splice(),slice(),concat(),forEach(),map(),filter(),reduce(),find(),sort();


// push();

function addForward(array,element){
    console.log("array before",array)
    array.push(element);
    console.log("array after",array)
}

addForward([1,2,3,4],90)

// pop();

function removeBackward(array){
    console.log("array before",array);
    array.pop()
    console.log("array after",array)
}

removeBackward([1,2,3,4,5]);

// shift();

function removeForward(array){
    console.log("array before",array);
    array.shift();
    console.log("array after",array)
}

removeForward([1,2,3,4,5,6,7]);

// unshift()

function addForward(array,element){
    console.log("array before",array)
    array.unshift(element);
    console.log("array after",array)
}

addForward([1,2,3,5],89)

// concat()

function mergeArrays(array1,array2){
    const mergedArray = array1.concat(array2)
    console.log("merged array",mergedArray)
}

mergeArrays([1,2,3],[4,5,67]);

// forEach()

// function iterateOverArray(array){
//     array.forEach(element => {
//         console.log("element",element)
//     });
// }

function iterateOverArray(array){
    array.forEach(function (element){
        console.log("element",element)
    })
}

iterateOverArray([1,2,3,4,5,6]);

//callbacks map,filter,find,sort next part 


