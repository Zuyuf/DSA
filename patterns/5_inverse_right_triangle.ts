// 5_inverse_right_triangle.ts

/**
Example 1:

Input: 5

Output:
* * * * *
* * * * 
* * * 
* * 
* 

*/

function printInverseRightTriangle(inp: number, char = '*') {
    for (let i = inp; i >= 1; i--) {
        console.log(char.repeat(i));
    }
}

printInverseRightTriangle(5);

export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files