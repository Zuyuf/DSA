// 3_triangle_number.ts

/**
Example 1:

Input: 5

Output:
1
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
 */

function triangleNumberPattern(input: number) {
    let line = '';

    for (let i = 1; i <= input; i++) {
        line += i;
        console.log(line);
    }
}

triangleNumberPattern(5);