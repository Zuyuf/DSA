// 3_triangle_number.ts

/**
Example 1:

Input: 5

Output:
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15

 */

function triangleNumber3Pattern(input: number) {
    let count = 1;
    let line = '';

    for (let i = 1; i <= input; i++) {
        line = '';

        for (let j = 1; j <= i; j++) line += (count++ + ' ');

        console.log(line);
    }
}

triangleNumber3Pattern(5);

export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files