// allDivisors.ts

function allDivisors(N: number) {
    const divisors = [];

    for (let i = 1; i <= N; i++) {
        if (N % i === 0) divisors.push(i);
    }

    return divisors;
}

function allDivisors_OptimalSolution(N: number) {
    const divisors = [];

    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0){
            divisors.push(i);

            if (i !== N / i) divisors.push(N / i);
        }
    }

    return divisors;
}


//
const num = 36;

console.time('allDivisors')
console.log(allDivisors(num));
console.timeEnd('allDivisors')

console.time('allDivisors_OptimalSolution')
console.log(allDivisors_OptimalSolution(num));
console.timeEnd('allDivisors_OptimalSolution')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
