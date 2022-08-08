function twoSum(nums: number[], target: number) {
    const map: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in map) return [map[diff], i];
        map[nums[i]] = i;
    }

    return [];
};

function twoSum2(nums: number[], target: number) {
    const leftover: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        if (leftover.hasOwnProperty(nums[i])) {
            return [leftover[nums[i]], i]
        } else {
            const remainder = target - nums[i]
            leftover[remainder] = i
        }
    }

    return [];
};

console.time('time1');
console.log(' Two Sum = ', twoSum([2,7,11,15], 9));
console.timeEnd('time1');

console.time('time1.1');
console.log(' Two Sum = ', twoSum2([2,7,11,15], 9));
console.timeEnd('time1.1');


console.time('time2');
console.log(' Two Sum = ', twoSum([3,2,4], 6));
console.timeEnd('time2');

console.time('time2.2');
console.log(' Two Sum = ', twoSum2([3,2,4], 6));
console.timeEnd('time2.2');


console.time('time3');
console.log(' Two Sum = ', twoSum([3,3], 6));
console.timeEnd('time3');

console.time('time3.3');
console.log(' Two Sum = ', twoSum2([3,3], 6));
console.timeEnd('time3.3');
