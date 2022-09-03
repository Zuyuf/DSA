function addBinary(a: string, b: string): string {
    let sum = '';
    let ai = a.length - 1;
    let bj = b.length - 1;
    let carry = 0;
    let local_sum = 0;

    while (ai >= 0 || bj >= 0) {
        local_sum = carry;

        if (ai >= 0) local_sum += parseInt(a[ai--]);
        if (bj >= 0) local_sum += parseInt(b[bj--]);

        sum = (local_sum % 2) + sum;
        carry = Math.floor(local_sum / 2);
    }

    if (carry > 0) sum = carry + sum;
    return sum;
};


console.time('time1');
const addBinary1 = addBinary("11", "1");
console.timeEnd('time1');
console.log('addBinary = ', addBinary1, ' => ', addBinary1 === '100');

console.time('time1');
const addBinary2 = addBinary("1010", "1011");
console.timeEnd('time1');
console.log('addBinary = ', addBinary2, ' => ', addBinary2 === '10101');
