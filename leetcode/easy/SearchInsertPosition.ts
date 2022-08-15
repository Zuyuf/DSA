function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;

    while (low < high) {
        mid = Math.floor((high - low) / 2) + low;

        if (nums[mid] === target) {
            return mid;
        }
        else if (target < nums[mid]) {
            high = mid - 1;
        }
        else if (target > nums[mid]) {
            low = mid + 1;
        }
    }

    return nums[low] < target ? low + 1 : low;
};


console.time('time1');
const searchInsert1 = searchInsert([1,3,5,6], 5);
console.timeEnd('time1');
console.log('searchInsert = ', searchInsert1, ' => ', searchInsert1 === 2);

console.time('time1');
const searchInsert2 = searchInsert([1,3,5,6], 2);
console.timeEnd('time1');
console.log('searchInsert = ', searchInsert2, ' => ', searchInsert2 === 1);

console.time('time1');
const searchInsert3 = searchInsert([1,3,5,6], 7);
console.timeEnd('time1');
console.log('searchInsert = ', searchInsert3, ' => ', searchInsert3 === 4);

console.time('time1');
const searchInsert4 = searchInsert([1,3,5,6], 0);
console.timeEnd('time1');
console.log('searchInsert = ', searchInsert4, ' => ', searchInsert4 === 0);

console.time('time1');
const searchInsert5 = searchInsert([1,3], 0);
console.timeEnd('time1');
console.log('searchInsert = ', searchInsert5, ' => ', searchInsert5 === 0);