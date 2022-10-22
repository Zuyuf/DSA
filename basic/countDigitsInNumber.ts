// countDigitsInNumber.ts

function divideApproach(num: number) {
    if (num === 0) return 1;

    let count = 0;
    let n = num;

    while(n !== 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return (count);
}

function stringApproach(num: number) {
    return String(num).length;
}

function logBase10Approach(num: number) {
    return Math.floor(Math.log10(num) + 1);
}

//

const longNum = 12635684317235122;
console.log('longNum == ', longNum);

console.time('divideApproach')
console.log(divideApproach(longNum));
console.timeEnd('divideApproach')

console.time('stringApproach')
console.log(stringApproach(longNum));
console.timeEnd('stringApproach')

console.time('logBase10Approach')
console.log(logBase10Approach(longNum));
console.timeEnd('logBase10Approach')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files

