## Topics: Arrays, Object, Functions, and Conditionals in JavaScript

Complete this Mini JavaScript Project:

You will be creating a miniature task tracker!

1. Initialize a global variable `taskArray` with an empty array `[]`
2. Define a function named `taskManager` which accepts two arguments
    1. The first argument should be called `action`. It must be a `string`, which will tell the function what action to take on your global `taskArray` variable.
    2. The second argument should be called `task`. It must be an `object` or `null`.
3. In your function, check the parameters are valid data types with this if-condition:
    1. If `action` is not a `string`, console log the message \`Error: Action “\${action}” needs to be a string!\`, then `return -1;`
    2. If `task` is not an `object` or `null`, console log the message \`Error: Task must be an object or null, but instead found “\${typeof task}”\`, then `return -1;`
4. In your function, create an if-condition which checks what the action is, and does the appropriate thing:
    1. If `action` is `“add first”`, add the task parameter to the **beginning (left side)** of the `taskArray`
    2. If `action` is `“add last”`, add the task parameter to the **end (right side)** of the `taskArray`
    3. If `action` is `“remove first”`, remove the **first** element (index 0) of `taskArray`
    4. If `action` is `“remove last”`, remove the **last** element of the `taskArray`
    5. If `action` is `“get third item”`, console log the **third** item (not _third index_) of `taskArray` - even if `taskArray` doesn’t have 3 items!
    6. If `action` is not any of the above, console log the message \`Error: Action “\${action}” is not handled in this function.\`, then `return -1;`
5. At the end of your function, console log two things:
    1. The message \`Action “\${action}” completed. New tasks:\`
    2. The new value of `taskArray`.

Woohoo, hopefully you did everything correctly! Now let’s test that everything works well. Test your function by running all of these statements:

1. taskManager(“add last”, {title: “Eat Shawerma”})
2. taskManager(“add first”, {title: “Buy Cookies”})
3. taskManager(“add first”, {title: “Buy Alex Cookies”})
4. taskManager(“get third item”, null)
5. taskManager(“remove last”, null)
6. taskManager(“add first”, {title: “Eat vegetables”})
7. taskManager(“remove first”, null)
8. taskManager(“cure cancer”, null)
9. taskManager(“get third item”)

> Take a screenshot of the output of all of these tests, and let me know what you ended up with!

Done! Now feel free to come up with your own tests, and maybe track your own tasks in your task tracker! :)
