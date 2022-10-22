// gcd.ts


function GCD_BruteForce(num1: number, num2: number) {
    let gcd = 1;

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }

    return gcd;
}

function GCD_Euclidean(num1: number, num2: number): number {
    if (num2 === 0) return num1;

    return GCD_Euclidean(num2, num1 % num2);
}


//

const [num1, num2] = [1086, 78];

console.time('GCD_BruteForce')
console.log(GCD_BruteForce(num1, num2));
console.timeEnd('GCD_BruteForce')

console.time('GCD_Euclidean')
console.log(GCD_Euclidean(num1, num2));
console.timeEnd('GCD_Euclidean')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
