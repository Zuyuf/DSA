

function ArraryRotateLeft(arr, numRotations) {
    if (arr.length === numRotations) return arr;
    if (numRotations > arr.length) {
        const actualRotations = arr.length % numRotations;

        return [...arr.splice(actualRotations), ...arr.splice(ac,)]
    }

    for (let i = 0; i < numRotations; i++) {
        arr = [...arr.splice(1), arr[arr.length - 1]]
    }

    return arr;
}

console.log('result = ', ArraryRotateLeft([3, 5, 1, 6, 7], 3));


