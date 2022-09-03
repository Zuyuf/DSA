function strStr(haystack: string, needle: string): number {
    if (haystack.length < needle.length) return -1;
    
    let firstOcur = -1;
    let curIdx = 0;

    while (curIdx < haystack.length) {
        if (haystack[curIdx] === needle[0]) {
            let curNeedleIdx = 0;

            while (curNeedleIdx < needle.length) {
                if (haystack[curIdx + curNeedleIdx] !== needle[curNeedleIdx]) break;

                curNeedleIdx++;
            }

            if (curNeedleIdx === needle.length) {
                firstOcur = curIdx;
                break;
            }
        }

        curIdx++;
    }

    return firstOcur;
};


console.time('time1');
const strStr1 = strStr("hello", "ll");
console.timeEnd('time1');
console.log('strStr = ', strStr1, ' => ', strStr1 === 2);