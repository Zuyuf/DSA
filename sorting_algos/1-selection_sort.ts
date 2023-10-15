// selection_sort.ts

/**
 * TimeComplexity = O(N^2)
 * SpaceComplexity = O(1)
 */

function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let smallestValIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestValIdx]) smallestValIdx = j;
        }

        let temp = arr[i];
        arr[i] = arr[smallestValIdx];
        arr[smallestValIdx] = temp;
    }

    return arr;
}


const arr1 = [13,46,24,52,20,9];
const arr2 = [5,4,3,2,1];
const arr3 = [52, 23, 543, 23, 65, 87, 2, 23, 87, 54, 76, 32, 76, 978, 342, 435, 435435, 23, 1, 4, 56, 7, 4, 78,4, 23, 423];

console.time('selectionSort_initial')
console.log(selectionSort(arr1));
console.timeEnd('selectionSort_initial')

console.time('selectionSort')
console.log(selectionSort(arr1));
console.timeEnd('selectionSort')

console.time('selectionSort_arr2')
console.log(selectionSort(arr2));
console.timeEnd('selectionSort_arr2')

console.time('selectionSort_arr3')
console.log(selectionSort(arr3));
console.timeEnd('selectionSort_arr3')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
