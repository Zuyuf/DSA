/**
Example 1:

Input: 5

Output:
* 
* * 
* * * 
* * * * 
* * * * *

*/

function printRightTriangle(inp: number, char = '*') {
    for (let i = 1; i <= inp; i++) {
        console.log(char.repeat(i));
    }
}

printRightTriangle(5);

export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files