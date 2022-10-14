// 18_right_triangle_alpha2.ts

/**
Example 1:

Input: 5

Output:
E
E D
E D C
E D C B
E D C B A

 */

function rightTriangleAlpha2Pattern(N: number) {
    const startCharCode = 64;
    let count = 1;
    let line = '';

    for (let i = 0; i < N; i++) {
        line = '';
        count = 1;

        for (let j = 0; j <= i; j++) line += (String.fromCharCode(startCharCode + (N - j)) + ' ');

        console.log(line);
    }
}

rightTriangleAlpha2Pattern(5);

export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files