// Math


function MathFunctions(value){
    console.log("Original Value:",value);

    let rounded = Math.round(value);
    console.log("Rounded",rounded);

    let ceiling = Math.ceil(value);
    console.log("ceiled",ceiling);

    let flooring = Math.floor(value);
    console.log("floored",flooring);

    let random = Math.random(value);
    console.log("random",random);

    let maxValue = Math.max(5,10,34);
    console.log("max value",maxValue);

    let minValue = Math.min(...[5,8,9]);
    console.log("min value",minValue);

    let powOfTwo = Math.pow(value,2);
    console.log("power of two",powOfTwo);
}

MathFunctions(9.3)