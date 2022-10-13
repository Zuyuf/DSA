// 11_binary_right_triangle_pattern.ts

/**
 * 
 * Input: 5

Output:

1 
0 1 
1 0 1
0 1 0 1 
1 0 1 0 1

 * 
 */


function printBinaryRightTrianglePattern(input: number) {
    let line = '';

    for (let i = 1; i <= input; i++) {
        line = '';

        for (let j = 1; j <= i; j++) {
            line += (i + j + 1) % 2;
            line += ' ';
        }

        console.log(line);
    }
}

printBinaryRightTrianglePattern(5);





export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files