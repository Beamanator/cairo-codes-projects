// define a function
function myFunction(param1, param2, param3) {
    var hasError = false;

    // check data types FIRST
    if (typeof param1 !== "number") {
        console.log("Error: param1 is not a number");
        hasError = true;
    }
    if (typeof param2 !== "number") {
        console.log("Error: param2 is not a number");
        hasError = true;
    }
    if (typeof param3 !== "string") {
        console.log("Error: param3 is not a string");
        hasError = true;
    }

    if (
        param1 === null ||
        param1 === undefined ||
        param2 === null ||
        param2 === undefined
    )
        return "Error: At least one number is not defined :(";

    // check valid range of param1 and param2
    if (param1 <= 0 || param1 >= 100 || param2 <= 0 || param2 >= 100)
        return "Error: Numbers must be between 1 and 99 (inclusive)";

    // if any error has happened, hasError will be true
    if (hasError === true) return;

    console.log("Ready for MATHS");

    if (param3 === "add") return param1 + param2;
    if (param3 === "subtract") return param1 - param2;
    if (param3 === "multiply") return param1 * param2;
    if (param3 === "divide") return param1 / param2;
    if (param3 === "remainder") return param1 % param2;

    if (
        param3 !== "add" &&
        param3 !== "subtract" &&
        param3 !== "multiply" &&
        param3 !== "divide" &&
        param3 !== "remainder"
    )
        return "Error: Invalid math operator";
}
