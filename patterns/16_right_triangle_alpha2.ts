// 16_right_triangle_alpha2.ts

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


function printRightTriangleAlpha2(N: number) {
    const startCharCode = 65; // A

    let line = '';

    for (let i = 0; i < N; i++) {
        line = '';

        for (let j = 0; j <= i; j++) line += String.fromCharCode(startCharCode + i);

        console.log(line);
    }
}

printRightTriangleAlpha2(5);


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
