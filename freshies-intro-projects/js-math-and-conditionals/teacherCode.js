// (a) define a function which accepts 3 arguments
function myFunction(param1, param2, param3) {
    // (d) if either number is <= 0 or >= 100...
    if (param1 <= 0 || param1 >= 100 || param2 <= 0 || param2 >= 100) {
        return "Error: Numbers must be between 1 and 99 (inclusive)";
    }
    // (e) if either number doesn't exist (null or undefined)...
    if (
        param1 === null ||
        param1 === undefined ||
        param2 === null ||
        param2 === undefined
    ) {
        return "Error: At least one number is not defined :(";
    }
    // (e) you could have also done this:
    // if (param1 == undefined || param2 == undefined) {...
    // (e) OR you could have also done this:
    // if (param1 == null || param2 == null) {...
    // Why? :) Does anyone know?

    // Note: parts (d) and (e) need to go BEFORE part (b) because... why? can anybody answer this?

    // (b) do something depending on param3
    if (param3 === "add") {
        return param1 + param2;
    } else if (param3 === "subtract") {
        return param1 - param2;
    } else if (param3 === "multiply") {
        return param1 * param2;
    } else if (param3 === "divide") {
        return param1 / param2;
    } else if (param3 === "remainder") {
        return param1 % param2;
    }
    // (c) if third param is not 'add' or 'subtract' or 'multiple' or 'divide' or 'remainder'...
    else {
        return "Error: Invalid math operator";
    }
    // (c) you could have also done this:
    // else if (param3 !== 'add' && param3 !== 'subtract' && param3 !== 'multiply' && param3 !== 'divide' && param3 !== 'remainder') {
    //     return "Error: Invalid math operator"
    // }
}

// (f) display the output of the function
console.log(myFunction(5, 5, "add"));
console.log(myFunction(98, 58, "subtract"));
console.log(myFunction(19, 0, "multiply"));
console.log(myFunction(99, 33, "divide"));
console.log(myFunction(84, 40, "remainder"));
console.log(myFunction(4, 10, "pineapple"));
console.log(myFunction(-6, 5, "divide"));
console.log(myFunction(601, 5, "multiply"));
console.log(myFunction());
