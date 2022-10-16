// 20_double_triangle_left_right.ts

/**
 * 

Input: 5

Output:
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

 */


function printDoubleTriangleLeftRightPttern(N: number, char = '*') {
    let line = '';

    for (let i = 1; i <= N; i++) {
        line = ''

        line += char.repeat(i);
        line += ' '.repeat((N - i) * 2);
        line += char.repeat(i);

        console.log(line);
    }

    for (let i = (N - 1); i >= 1; i--) {
        line = ''

        line += char.repeat(i);
        line += ' '.repeat((N - i) * 2);
        line += char.repeat(i);

        console.log(line);
    }
}

printDoubleTriangleLeftRightPttern(5);


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files