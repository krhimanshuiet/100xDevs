// functions 

// a function in js is a set of statements that perform a task or calculate a value
// it should take some input and return an output where there is some obvious relationship between the input and the output.


function findSum(n){ // function body / declaration
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        ans+=i;
    }
    return ans;
}
let ans = findSum(50); // function call
console.log(ans)
function sum(a,b){ // function body / declaration
    return a+b;
}


