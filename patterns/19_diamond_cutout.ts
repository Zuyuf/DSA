// 19_diamond_cutout.ts

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


function printDiamondCutoutPttern(N: number, char = '*') {
    let line = '';

    for (let i = 0; i < N; i++) {
        line = ''

        line += char.repeat(N - i);
        line += ' '.repeat(i * 2);
        line += char.repeat(N - i);

        console.log(line);
    }

    for (let i = 1; i <= N; i++) {
        line = ''

        line += char.repeat(i);
        line += ' '.repeat((N - i) * 2);
        line += char.repeat(i);

        console.log(line);
    }
}

printDiamondCutoutPttern(5);


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files