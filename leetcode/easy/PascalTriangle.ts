function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1,1]];

    const res = [[1], [1,1]];

    for (let i = 2; i <= numRows - 1; i++) {
        const row: number[] = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0) row.push(1);
            else if (j === i) row.push(1);
            else row.push(res[i - 1][j - 1] + res[i - 1][j]);
        }

        res.push(row);
    }

    return res;
};


console.time('time1');
const pascalTri1 = generate(1);
console.timeEnd('time1');
console.log('pascalTri1 = ', pascalTri1);

console.time('time1');
const pascalTri2 = generate(3);
console.timeEnd('time1');
console.log('pascalTri2 = ', pascalTri2);

console.time('time1');
const pascalTri3 = generate(5);
console.timeEnd('time1');
console.log('pascalTri3 = ', pascalTri3);

console.time('time1');
const pascalTri4 = generate(10);
console.timeEnd('time1');
console.log('pascalTri4 = ', pascalTri4);

export default { getPascalTriangle: generate }