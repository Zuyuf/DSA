function singleNumber(nums: number[]): number {
    let ans = nums[0];

    for (let idx = 1; idx < nums.length; idx++) {
        ans ^= nums[idx];
    }

    return ans;
};


console.time('singleNumber1 time');
const singleNumber1 = singleNumber([2,2,1]);
console.timeEnd('singleNumber1 time');
console.log('singleNumber1 = ', singleNumber1, ' => ', singleNumber1 === 1);

console.time('singleNumber2 time');
const singleNumber2 = singleNumber([4,1,2,1,2]);
console.timeEnd('singleNumber2 time');
console.log('singleNumber2 = ', singleNumber2, ' => ', singleNumber2 === 4);

console.time('singleNumber3 time');
const singleNumber3 = singleNumber([1]);
console.timeEnd('singleNumber3 time');
console.log('singleNumber3 = ', singleNumber3, ' => ', singleNumber3 === 1);


export default { SingleNumber: singleNumber }