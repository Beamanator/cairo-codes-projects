// (1) initialize global variable
var taskArray = [];

// (2) define function
function taskManager(action, task) {
    // (3.1) check parameters are valid data types
    if (typeof action !== "string") {
        console.log(`Error: Action "${action}" needs to be a string!`);
        return -1;
    }
    // (3.2)
    if (typeof task !== "object" && task !== null) {
        console.log(
            `Error: Task must be an object or null, but instead found "${typeof task}"`
        );
        return -1;
    }

    // (4) check if action is ________ and do appropriate action
    if (action === "add first") taskArray.unshift(task);
    else if (action === "add last") taskArray.push(task);
    else if (action === "remove first") taskArray.shift();
    else if (action === "remove last") taskArray.pop();
    else if (action === "get third item") console.log(taskArray[2]);
    else {
        console.log(
            `Error: Action "${action}" is not handled in this function.`
        );
        return -1;
    }
}

taskManager("add last", { title: "Eat Shawerma" });
taskManager("add first", { title: "Buy Cookies" });
taskManager("add first", { title: "Buy Alex Cookies" });
taskManager("get third item", null);
taskManager("remove last", null);
taskManager("add first", { title: "Eat vegetables" });
taskManager("remove first", null);
taskManager("cure cancer", null);
taskManager("get third item");

// output of tests can be found in 'testOutput.png' file
