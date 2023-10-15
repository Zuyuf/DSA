// insertion_sort.ts

/**
 * TimeComplexity = O(N^2)
 * SpaceComplexity = O(1)
 */

function insertion_sort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        const currEle = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currEle) {
            arr[j + 1] = arr[j]
            j--;
        }

        arr[j + 1] = currEle;
    }

    return arr;
}


const arr1 = [13,46,24,52,20,9];
const arr2 = [5,4,3,2,1];
const arr3 = [52, 23, 543, 23, 65, 87, 2, 23, 87, 54, 76, 32, 76, 978, 342, 435, 435435, 23, 1, 4, 56, 7, 4, 78,4, 23, 423];

console.time('insertion_sort_initial')
console.log(insertion_sort(arr1));
console.timeEnd('insertion_sort_initial')

console.time('insertion_sort')
console.log(insertion_sort(arr1));
console.timeEnd('insertion_sort')

console.time('insertion_sort_arr2')
console.log(insertion_sort(arr2));
console.timeEnd('insertion_sort_arr2')

console.time('insertion_sort_arr3')
console.log(insertion_sort(arr3));
console.timeEnd('insertion_sort_arr3')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
