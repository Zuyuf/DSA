function removeDuplicates(nums: number[]): number {
    if (nums.length === 1) return 1;

    let curIdx = 1;
    let recentSmallestNumIdx = 0;

    while (curIdx < nums.length) {
        if (nums[recentSmallestNumIdx] === nums[curIdx]) {
            curIdx++;
            continue;
        }

        nums[++recentSmallestNumIdx] = nums[curIdx++];
    }

    return ++recentSmallestNumIdx;
};

console.time('time1');
const removeDuplicates1 = removeDuplicates([1,1,2]);
console.timeEnd('time1');
console.log('removeDuplicates = ', removeDuplicates1, ' => ', removeDuplicates1 === 2);
