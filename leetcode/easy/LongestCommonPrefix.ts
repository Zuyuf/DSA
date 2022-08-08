function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];

    let strIdx = 0;
    let lcp = '';
    let curChar = ''
    let minStrLen = strs.reduce((_min, curStr) => Math.min(_min, curStr.length), Number.MAX_SAFE_INTEGER);

    if (minStrLen === 0) return '';

    while (true) {
        if (strIdx >= minStrLen) return lcp;
        curChar = strs[0][strIdx];

        for (let i = 0; i < strs.length; i++) {
            if (curChar !== strs[i][strIdx]) return lcp;
        }

        lcp += curChar;
        strIdx++;
    }
};

console.time('time1');
console.log('longestCommonPrefix = ', longestCommonPrefix(["flower","flow","flight"]));
console.timeEnd('time1');

console.time('time1');
console.log('longestCommonPrefix = ', longestCommonPrefix(["dog","racecar","car"]));
console.timeEnd('time1');

console.time('time1');
console.log('longestCommonPrefix = ', longestCommonPrefix(["",""]));
console.timeEnd('time1');

console.time('time1');
console.log('longestCommonPrefix = ', longestCommonPrefix(["flower","flower","flower","flower"]));
console.timeEnd('time1');