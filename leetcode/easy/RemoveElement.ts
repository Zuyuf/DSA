function removeElement(nums: number[], val: number): number {
    let curIdx = 0;
    let replaceIdx = 0;

    while (curIdx < nums.length) {
        if (nums[curIdx] !== val) nums[replaceIdx++] = nums[curIdx];

        curIdx++;
    }

    return replaceIdx;
};

console.time('time1');
const removeElement1 = removeElement([3,2,2,3], 3);
console.timeEnd('time1');
console.log('removeElement = ', removeElement1, ' => ', removeElement1 === 2);

console.time('time2');
const removeElement2 = removeElement([0,1,2,2,3,0,4,2], 2);
console.timeEnd('time2');
console.log('removeElement = ', removeElement2, ' => ', removeElement2 === 5);
