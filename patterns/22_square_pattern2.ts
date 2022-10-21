// 22_square_pattern2.ts

/**

Input: 4

Output:
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

 */


function printSquare2Pattern(_N: number) {
    const OriginalN = _N;
    let line = '';
    const N = _N * 2;
    
    for (let row = 1; row < N; row++) {
        line = '';

        for (let col = 1; col < N; col++) {
            const val = OriginalN - Math.min(Math.min(row, col), Math.min(N - row, N - col)) + 1
            line += (val + ' ')
        }

        console.log(line);
    }
}


printSquare2Pattern(3);



export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files