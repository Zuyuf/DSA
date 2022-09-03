function plusOne(digits: number[]): number[] {
    let curIdx = digits.length - 1;
    let carry = 1;

    while (carry > 0 && curIdx > -1) {
        if (digits[curIdx] + carry > 9) {
            digits[curIdx] = 0;
        } 
        else {
            digits[curIdx] += carry;
            carry--;
        }

        curIdx--;
    }

    if (carry > 0 && curIdx === -1) digits.splice(0, 0, carry);

    return digits;
};


console.time('time1');
const plusOne1 = plusOne([4,3,2,1]);
console.timeEnd('time1');
console.log('plusOne = ', plusOne1, ' => ', plusOne1.join('') === '4322');


console.time('time1');
const plusOne2 = plusOne([1,2,3]);
console.timeEnd('time2');
console.log('plusOne = ', plusOne2, ' => ', plusOne2.join('') === '124');


console.time('time1');
const plusOne3 = plusOne([9]);
console.timeEnd('time1');
console.log('plusOne = ', plusOne3, ' => ', plusOne3.join('') === '10');