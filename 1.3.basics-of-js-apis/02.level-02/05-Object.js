// Object Methods Explanation

function objectMethods(obj){
    console.log("Original Obj",obj);

    let keys = Object.keys(obj);
    console.log("keys",keys);

    let values = Object.values(obj);
    console.log("values",values);

    let entries = Object.entries(obj);
    console.log("obj entries",entries);

    let hasProp = obj.hasOwnProperty("name");
    console.log("is own",hasProp);

    let newObj = Object.assign({},obj,{state:"bihar"});

    console.log("new obj",newObj);


}


objectMethods({name:"himanshu",age:24,city:"patna",mob:"8368346653"})