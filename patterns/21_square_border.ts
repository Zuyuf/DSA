// 21_square_border.ts

/**
 * 

Input: 4

Output:
****
*  *
*  *
****

 */


function printSquareBorderPattern(N: number, char = '*') {
    let line = '';

    for (let i = 1; i <= N; i++) {
        line = '';

        if (i === 1 || i === N) line = char.repeat(N);
        else line = char + ' '.repeat(N - 2) + char;

        console.log(line);
    }
}

printSquareBorderPattern(4);


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files

