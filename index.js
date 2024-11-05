// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function isValid(s) {
  // At first, initialize a stack to store the open brackets

  const stack = [];

  // Create a mapping object of closing brakets to their corresponding open brackets

  const bracketMap = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  };

  // Loop through each character in the string

  for (let char of s) {

    //If character is a closing bracket

    if (char in bracketMap) {

        // Check if the stack is not empty and the top of the stack is the corresponding open bracket
    const topElement = stack.length ? stack.pop() : '#';

    if (topElement !== bracketMap[char]) {
      return false; //Invalid if brackets do not match
    }

    } else {
      // It's an open bracket, push it onto stacks
      stack.push(char);
    }
  }

  // If the stack is empty, all open brackets were closed; otherwise, return false
  return stack.length === 0;
}

// Testing the function with the given examples
console.log(isValid("(]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));