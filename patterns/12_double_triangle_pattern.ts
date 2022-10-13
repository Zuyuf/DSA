// 11_binary_right_triangle_pattern.ts

/**
 * 

Input: 5

Output:
1                 1
1 2             2 1
1 2 3         3 2 1
1 2 3 4     4 3 2 1
1 2 3 4 5 5 4 3 2 1

 * 
 */


function printDoubleTrianglePattern(input: number) {
    let line = '';

    for (let i = 1; i <= input; i++) {
        line = '';
        
        for (let j = 1; j <= i; j++) line += j;
        
        if (i !== input) line += ' '.repeat((input - i) * 2);
        
        for (let j = i; j >= 1; j--) line += j;

        console.log(line);
    }
}

printDoubleTrianglePattern(9);





export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files