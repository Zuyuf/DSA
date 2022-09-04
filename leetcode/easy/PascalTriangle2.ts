function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    else if (rowIndex === 1) return [1, 1];

    let halfPascalTri = [[1], [1]];
    let halfPascalRow = [1];
    let numEleInRow = 0;
    let [d1, d2, row] = [0, 0, [] as number[]];

    for (let i = 2; i <= rowIndex; i++) {
        halfPascalRow = [1];
        numEleInRow = Math.ceil((i + 1) / 2) ;

        for (let j = 1; j < numEleInRow; j++) {
            row = halfPascalTri[i - 1];
            d1 = row[j - 1];
            d2 = row[j] ?? row[j - 1];

            halfPascalRow.push(d1 + d2);
        }

        halfPascalTri.push(halfPascalRow);
    }

    const res = [...halfPascalTri[rowIndex]];
    const startIdx = halfPascalTri[rowIndex].length - (rowIndex % 2 === 0 ? 2 : 1);

    for (let k = startIdx; k >= 0; k--) {
        res.push(halfPascalTri[rowIndex][k]);
    }

    return res;
};

console.time('time1');
const pascalRow1 = getRow(0);
console.timeEnd('time1');
console.log('pascalRow1 = ', pascalRow1);

console.time('time1');
const pascalRow2 = getRow(1);
console.timeEnd('time1');
console.log('pascalRow2 = ', pascalRow2);

console.time('time1');
const pascalRow3 = getRow(2);
console.timeEnd('time1');
console.log('pascalRow3 = ', pascalRow3);

console.time('time1');
const pascalRow4 = getRow(3);
console.timeEnd('time1');
console.log('pascalRow4 = ', pascalRow4);

console.time('time1');
const pascalRow5 = getRow(4);
console.timeEnd('time1');
console.log('pascalRow5 = ', pascalRow5);

console.time('time1');
const pascalRow6 = getRow(5);
console.timeEnd('time1');
console.log('pascalRow6 = ', pascalRow6);

console.time('time1');
const pascalRow7 = getRow(6);
console.timeEnd('time1');
console.log('pascalRow7 = ', pascalRow7);

console.time('time1');
const pascalRow8 = getRow(7);
console.timeEnd('time1');
console.log('pascalRow8 = ', pascalRow8);

export default { getPascalRow: getRow }