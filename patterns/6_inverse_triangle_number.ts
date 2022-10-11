// 6_inverse_triangle_number.ts

/**
Example 1:

Input: 5

Output:
1 2 3 4 5
1 2 3 4 
1 2 3 
1 2 
1
 */

function inverseTriangleNumberPattern(input: number) {
    let line = Array.from({ length: input }, (_, i) => i + 1)

    for (let i = 0; i < input; i++) {
        console.log(line.join(''));
        line.pop();
    }
}

inverseTriangleNumberPattern(5);

export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files