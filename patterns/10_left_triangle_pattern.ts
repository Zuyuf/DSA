// 10_left_triangle_pattern.ts

/**
 * 
 * Input: 5

Output:

* 
* * 
* * * 
* * * * 
* * * * *
* * * *
* * *
* *
*

 * 
 */


function printLeftTrianglePattern(input: number, char = '*') {
    for (let i = 1; i <= input; i++) {
        console.log(char.repeat(i));
    }

    for (let i = input - 1; i >= 1; i--) {
        console.log(char.repeat(i));
    }
}

printLeftTrianglePattern(5);





export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files