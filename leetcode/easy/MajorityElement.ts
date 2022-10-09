// Moore voting
function majorityElement(nums: number[]): number {
    let majorEle = nums[0];
    let counter = 1;

    for (let i = 1; i < nums.length; i++) {
        if (counter === 0) {
            majorEle = nums[i];
            counter = 1;
        } //
        else if (majorEle === nums[i]) counter++;
        else counter--;
    }

    return majorEle;
};


console.time('majorityElement1 time');
const majorityElement1 = majorityElement([3,2,3]);
console.timeEnd('majorityElement1 time');
console.log('majorityElement1 = ', majorityElement1, ' => ', majorityElement1 === 3);

console.time('majorityElement2 time');
const majorityElement2 = majorityElement([2,2,1,1,1,2,2]);
console.timeEnd('majorityElement2 time');
console.log('majorityElement2 = ', majorityElement2, ' => ', majorityElement2 === 2);

console.time('majorityElement3 time');
const majorityElement3 = majorityElement([7, 7, 8, 8, 7, 8, 9, 2, 8, 9, 3]);
console.timeEnd('majorityElement3 time');
console.log('majorityElement3 = ', majorityElement3, ' => ', majorityElement3 === 8);


export default { majorityElementAppearingMoreThenNby2times: majorityElement }
