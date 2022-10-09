// 4_triangle_number2.ts

/**
Example 1:

Input: 5

Output:
1
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5

 */

function triangleNumberPattern2(input: number) {
    for (let i = 1; i <= input; i++) {
        console.log(i.toString().repeat(i));
    }
}

triangleNumberPattern2(5);


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files