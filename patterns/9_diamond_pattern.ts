// 9_diamond_pattern.ts

/**
 * 
 * Input: 5

Output:

    *
   ***  
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
    
 * 
 */

   function printDiamondPattern(input: number, char = '*') {
    let line = '';

    for (let i = 1; i <= input; i++) {
        line = '';

        if (i !== input) line = ' '.repeat(input - i);
        line += char.repeat(2 * i - 1);
        
        console.log(line);
    }
    
    for (let i = input; i >= 1; i--) {
        line = '';

        if (i !== input) line = ' '.repeat(input - i);
        line += char.repeat(2 * i - 1);
        
        console.log(line);
    }
}

printDiamondPattern(5);



export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files