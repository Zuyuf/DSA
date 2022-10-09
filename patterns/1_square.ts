/**
 * Input: 5

* Output:
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
 */

function printSquare(input: number) {
    const line = '*'.repeat(input);

    for (let i = 0; i < input; i++) {
        console.log(line);
    }
}

printSquare(5);

export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files