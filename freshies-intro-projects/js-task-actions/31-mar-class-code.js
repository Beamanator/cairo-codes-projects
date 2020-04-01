/**
 * Interesting notes from class:
 * 
 * Type Checking
 * typeof "Hello" -> returns "string"
 * typeof null -> returns "object"
 * 
 * Definitions:
 * - REFACTOR: Code refactoring is the process of restructuring existing code without changing its behavior.
 * 
 * Test your code often! After every change you make, test!
 */

/*
 * Initializing the global supermarket array
 */
var mySupermarket = [
    'apple',
    'cereal',
    'milk'
]

/*
 * Initial function (version 1) which only displays the parameters in the console
 */
function supermarketManager_v1(operation, item) {
    console.log(operation, item)
}

/*
 * Code with only one operation (version 2)
 * - Add "+"
 *
 * Added:
 * - New operation Add "+"
 */
function supermarketManager_v2(operation, item) {
    // add items to supermarket
    if (operation === '+') {
        mySupermarket.push(item)
    }
}

/*
 * Code with only one operation (version 3)
 * - Add "+"
 *
 * Added:
 * - Console now logs which operation happened & current supermarket
 */
function supermarketManager_v3(operation, item) {
    // add items to supermarket
    if (operation === '+') {
        mySupermarket.push(item)
    }

    // display the last operation & current values in my supermarket
    console.log('Did this operation: ', operation);
    console.log('My current supermarket: ', mySupermarket);
}

/*
 * Code with only two operations (version 4)
 * - Add "+" and clear all "-"
 *
 * Added:
 * - New operation clear all "-"
 */
function supermarketManager_v4(operation, item) {
    // add items to supermarket
    if (operation === '+') {
        mySupermarket.push(item)
    }

    // clear all items from supermarket
    if (operation === '-') {
        mySupermarket = []
    }

    // display the last operation & current values in my supermarket
    console.log('Did this operation: ', operation);
    console.log('My current supermarket: ', mySupermarket);
}

/*
 * Code with only two operations (version 5)
 * - Add "+" and clear all "-"
 *
 * Errors handled:
 * - Invalid operation parameter
 *
 * Added:
 * - Error displays if operation parameter is invalid
 * - Function quits early if operation parameter is invalid
 */
function supermarketManager_v5(operation, item) {
    // add items to supermarket
    if (operation === '+') {
        mySupermarket.push(item)
    }

    // clear all items from supermarket
    else if (operation === '-') {
        mySupermarket = []
    }

    // display error if operation is not valid
    else {
        // back-ticks used to create a "template string"
        console.log(`Error: ${operation} is not a valid operation!`);
        return;
    }

    // display the last operation & current values in my supermarket
    console.log('Did this operation: ', operation);
    console.log('My current supermarket: ', mySupermarket);
}

/*
 * Code with 5 operations (version 6)
 * Add "+":
 * - Right side ">"
 * - Left side "<"
 * Remove "-":
 * - Right side ">"
 * - Left side "<"
 * - All "*"
 *
 * Errors handled:
 * - Invalid operation parameter
 *
 * Added:
 * - New parameter 'side'
 * - New operation Add Left "+", "<"
 * - New operation Add Right "+", ">"
 * - New operation Remove Left "-", "<"
 * - New operation Remove Right "-", ">"
 * - New operation Remove All "-", "*"
 */
function supermarketManager_v6(operation, side, item) {
    // add items to supermarket
    if (operation === '+') {
        // add item to the right side
        if (side === '>') {
            mySupermarket.push(item)
        }
        // add item to the left side
        else if (side === '<') {
            mySupermarket.unshift(item)
        }
    }

    // clear items from supermarket
    else if (operation === '-') {
        // remove item from right side
        if (side === '>') {
            mySupermarket.pop()
        }
        // remove item from left side
        else if (side === '<') {
            mySupermarket.shift()
        }
        // remove ALL items
        else if (side === '*') {
            mySupermarket = []
        }
    }

    // display error if operation is not valid
    else {
        // back-ticks used to create a "template string"
        console.log(`Error: ${operation} is not a valid operation!`);
        return;
    }

    // display the last operation & current values in my supermarket
    console.log('Did this operation: ', operation);
    console.log('My current supermarket: ', mySupermarket);
}

/*
 * Code with 5 operations (version 7)
 * Add "+":
 * - Right side ">"
 * - Left side "<"
 * Remove "-":
 * - Right side ">"
 * - Left side "<"
 * - All "*"
 *
 * Errors handled:
 * - Invalid operation parameter
 * - Invalid side parameter
 *
 * Added:
 * - Error displayed if 'side' parameter is invalid
 * - Function quits early if 'side' parameter is invalid
 */
function supermarketManager_v7(operation, side, item) {
    // add items to supermarket
    if (operation === '+') {
        // add item to the right side
        if (side === '>') mySupermarket.push(item)
        
        // add item to the left side
        else if (side === '<') mySupermarket.unshift(item)

        else {
            console.log(`Error: ${side} is not a valid side!`);
            return;
        }
    }

    // clear items from supermarket
    else if (operation === '-') {
        // remove item from right side
        if (side === '>') mySupermarket.pop()
        
        // remove item from left side
        else if (side === '<') mySupermarket.shift()
        
        // remove ALL items
        else if (side === '*') mySupermarket = []

        else {
            console.log(`Error: ${side} is not a valid side!`);
            return;
        }
    }

    // display error if operation is not valid
    else {
        // back-ticks used to create a "template string"
        console.log(`Error: ${operation} is not a valid operation!`);
        return;
    }

    // display the last operation & current values in my supermarket
    console.log('Did this operation: ', operation);
    console.log('My current supermarket: ', mySupermarket);
}

/**
 * Code with 5 operations (Final Code from Class)
 * Add "+":
 * - Right side ">"
 * - Left side "<"
 * Remove "-":
 * - Right side ">"
 * - Left side "<"
 * - All "*"
 *
 * Errors handled:
 * - Invalid operation parameter
 * - Invalid side parameter
 * - Invalid item parameter (data type must be 'string' or 'object', but not null)
 *
 * Added:
 * - Refactored error handling to beginning of function
 * - Error displayed if 'item' parameter is invalid data type
 * - Quits early if any invalid parameters are found
 */
function supermarketManager(operation, side, item) {
    var isInvalid;

    if (side != '>' && side != '<' && side != '*' && side != 'middle') {
        console.log(`Error: ${side} is not a valid side!`);
        isInvalid = true;
    }
    if (operation != '+' && operation != '-') {
        console.log(`Error: ${operation} is not a valid operation!`);
        isInvalid = true;
    }
    // 'item' must be the data type "string" or "object"
    // -> Error if it's not :)
    if (typeof item != 'string' && typeof item != 'object') {
        console.log(`Error: 'item' is not a valid data type. Found data type: ${typeof item}`);
        isInvalid = true;
    }
    // 'item' can NOT be null
    if (item === null) {
        console.log(`Error: 'item' is not a valid data type. Found 'null'`);
        isInvalid = true;
    }

    // quit if one of your parameters is not valid
    if (isInvalid === true) return;

    // add items to supermarket
    if (operation === '+') {
        // add item to the right side
        if (side === '>') mySupermarket.push(item)

        // add item to the left side
        else if (side === '<') mySupermarket.unshift(item)
    }

    // clear items from supermarket
    else if (operation === '-') {
        // remove item from right side
        if (side === '>') mySupermarket.pop()

        // remove item from left side
        else if (side === '<') mySupermarket.shift()

        // remove ALL items
        else if (side === '*') mySupermarket = []
    }

    // display the last operation & current values in my supermarket
    console.log('Did this operation: ', operation);
    console.log('My current supermarket: ', mySupermarket);
}
