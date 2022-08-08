function isPalindrome(x: number | string): boolean {
    const s = x.toString();

    if (s.length === 1) return true;

    const start = s[0];
    const end = s[s.length - 1];

    if (start !== end) return false;
    if (s.length === 2) return true;

    const subStr = s.substring(1, s.length - 1);
    return isPalindrome(subStr);
};

function isPalindrome2(x: number | string, idx1 = 0, idx2 = x.toString().length - 1): boolean {
    const s = x.toString();
    const idxDiff = idx2 - idx1;

    if (idxDiff === 0) return true;
    if (idxDiff === 1 || s[idx1] !== s[idx2]) return false;
    if (idxDiff === 2) return true;

    return isPalindrome2(s, idx1 + 1, idx2 - 1);
};

function isPalindrome3(x: number): boolean {
    let s = x.toString();
    let p1 = 0;
    let p2 = s.length - 1;

    while (true) {
        if (p1 >= p2) return true;
        if (s[p1++] !== s[p2--]) return false;
    }
};



console.time('time1');
console.log('Palindrome = ', isPalindrome(121));
console.timeEnd('time1');

console.time('time1');
console.log('Palindrome = ', isPalindrome(-121));
console.timeEnd('time1');

console.time('time1');
console.log('Palindrome = ', isPalindrome(10));
console.timeEnd('time1');

console.log('\n ### ============= ### \n');

console.time('time2');
console.log('Palindrome2 = ', isPalindrome2(121));
console.timeEnd('time2');

console.time('time2');
console.log('Palindrome2 = ', isPalindrome2(-121));
console.timeEnd('time2');

console.time('time2');
console.log('Palindrome2 = ', isPalindrome2(10));
console.timeEnd('time2');

console.log('\n ### ============= ### \n');

console.time('time3');
console.log('Palindrome3 = ', isPalindrome3(121));
console.timeEnd('time3');

console.time('time3');
console.log('Palindrome3 = ', isPalindrome3(-121));
console.timeEnd('time3');

console.time('time3');
console.log('Palindrome3 = ', isPalindrome3(10));
console.timeEnd('time3');