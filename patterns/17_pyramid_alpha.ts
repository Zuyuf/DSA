// 17_pyramid_alpha.ts

/**
 
Input: 4
Output:
   A
  ABA
 ABCBA
ABCDCBA
.
 */


function printPyramidAlphaPattern(N: number) {
    const startCharCode = 65;

    let line = '';
    let count = 0;

    for (let i = 1; i <= N; i++) {
        line = '';
        count = 0

        line += ' '.repeat(N - i);

        for (let j = 1; j <= i; j++) line += String.fromCharCode(startCharCode + count++);
        for (let j = count - 2; j >= 0; j--) line += String.fromCharCode(startCharCode + j);

        console.log(line);
    }
}

printPyramidAlphaPattern(5);



export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files

