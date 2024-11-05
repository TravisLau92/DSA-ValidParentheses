Objective:
In this coding exercise, you will create a JavaScript function that takes a string containing characters '(', ')', '{', '}', '[' and ']' as input. Your task is to determine if the input string's parentheses are valid following these rules:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

For example, after implementing the function, you should be able to produce the following output:

```js
isValid("(]") -> false
isValid("()") -> true
isValid("()[]{}") -> true
``` 

<details>
<summary>Hints</summary>

1. Create a function `isValid(s)` that accepts a string `s` as an argument.
2. Initialize an empty array or a stack to store the open brackets that have not been closed.
3. Iterate through the string using a for loop. For each character:
   - If it is an open bracket, push it onto the stack.
   - If it is a close bracket, check if the stack is not empty and the top of the stack is the corresponding open bracket. If not, return `false`. If it is, remove the open bracket from the stack.
4. After the loop, if the stack is not empty, this means there are open brackets that have not been closed. So, return `false`.
5. If all the checks passed, return `true`.
6. Make sure to isolate the logic for checking matching brackets into a helper function for cleaner code.
7. Call the function with different input strings and log the results using a template literal.

</details>