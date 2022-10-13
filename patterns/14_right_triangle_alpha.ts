// 14_right_triangle_alpha.ts

/**
 * 

Input: 5

Output:
A
AB
ABC
ABCD
ABCDE

 */


function printRightTriangleAlpha(N: number) {
    const startCharCode = 65; // A

    let line = '';
    let charCode = startCharCode;

    for (let i = 1; i <= N; i++) {
        line = '';
        charCode = startCharCode;

        for (let j = 1; j <= i; j++) line += String.fromCharCode(charCode++);

        console.log(line);
    }
}

printRightTriangleAlpha(5);


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
