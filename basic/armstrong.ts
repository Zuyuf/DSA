// armstrong.ts


function armstrong(num: number) {
    let N = num.toString().split('');

    const sum = N.reduce((acc, ele) => {
        return acc += (parseInt(ele) ** N.length);
    }, 0);

    return num === sum;
}


//
const num = 14643232453;

console.time('armstrong')
console.log(armstrong(num));
console.timeEnd('armstrong')


export {}; // 👈️ make file ES Module
// otherwise causes the Duplicate function implementation error glitch due to legacy script files
