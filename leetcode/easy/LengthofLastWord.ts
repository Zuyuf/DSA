function lengthOfLastWord(s: string): number {
    let curIdx = s.length - 1;
    let lastWordLen = 0;

    while (0 <= curIdx) {
        if (s[curIdx] !== ' ') {
            lastWordLen++;
        }
        else if (lastWordLen > 0) break;
        
        curIdx--;
    }

    return lastWordLen;
};


console.time('time1');
const lengthOfLastWord1 = lengthOfLastWord("Hello World");
console.timeEnd('time1');
console.log('lengthOfLastWord = ', lengthOfLastWord1, ' => ', lengthOfLastWord1 === 5);

console.time('time1');
const lengthOfLastWord2 = lengthOfLastWord("   fly me   to   the moon  ");
console.timeEnd('time1');
console.log('lengthOfLastWord = ', lengthOfLastWord2, ' => ', lengthOfLastWord2 === 4);

console.time('time1');
const lengthOfLastWord3 = lengthOfLastWord("luffy is still joyboy");
console.timeEnd('time1');
console.log('lengthOfLastWord = ', lengthOfLastWord3, ' => ', lengthOfLastWord3 === 6);

console.time('time1');
const lengthOfLastWord4 = lengthOfLastWord("a");
console.timeEnd('time1');
console.log('lengthOfLastWord = ', lengthOfLastWord4, ' => ', lengthOfLastWord4 === 1);
