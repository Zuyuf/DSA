// bubble_sort.ts

/**
 * TimeComplexity = O(N^2)
 * SpaceComplexity = O(1)
 */

function bubbleSort(arr: number[]) {
    let hasSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
        hasSwapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] <= arr[j + 1]) continue;

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            hasSwapped = true;
        }

        if (!hasSwapped) break;
    }

    return arr;
}


const arr1 = [13,46,24,52,20,9];
const arr2 = [5,4,3,2,1];
const arr3 = [52, 23, 543, 23, 65, 87, 2, 23, 87, 54, 76, 32, 76, 978, 342, 435, 435435, 23, 1, 4, 56, 7, 4, 78,4, 23, 423];

console.time('bubbleSort_initial')
console.log(bubbleSort(arr1));
console.timeEnd('bubbleSort_initial')

console.time('bubbleSort')
console.log(bubbleSort(arr1));
console.timeEnd('bubbleSort')

console.time('bubbleSort_arr2')
console.log(bubbleSort(arr2));
console.timeEnd('bubbleSort_arr2')

console.time('bubbleSort_arr3')
console.log(bubbleSort(arr3));
console.timeEnd('bubbleSort_arr3')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
