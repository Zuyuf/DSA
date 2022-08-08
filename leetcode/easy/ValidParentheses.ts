function isValid(s: string): boolean {
    const ss = s.split('');
    if (ss.length === 0 || ss.length === 1) return false;

    let curIdx = 0;
    const stack: string[] = [];

    while (curIdx < ss.length) {
        if (ss[curIdx] === '[') stack.push(']');
        else if (ss[curIdx] === '{') stack.push('}');
        else if (ss[curIdx] === '(') stack.push(')');
        else if (stack.length === 0 || stack[stack.length - 1] !== ss[curIdx]) break;
        else stack.pop();

        curIdx++;
    }

    return stack.length === 0 && curIdx === ss.length;
};

console.time('time1');
const result = isValid("()");
console.timeEnd('time1');
console.log('isValid = ', result, ' => ', result === true);

console.time('time1');
const result2 = isValid("()[]{}");
console.timeEnd('time1');
console.log('isValid = ', result2, ' => ', result2 === true);

console.time('time1');
const result3 = isValid("(]");
console.timeEnd('time1');
console.log('isValid = ', result3, ' => ', result3 === false);

console.time('time1');
const result4 = isValid("((");
console.timeEnd('time1');
console.log('isValid = ', result4, ' => ', result4 === false);

console.time('time1');
const result5 = isValid("(){}}{");
console.timeEnd('time1');
console.log('isValid = ', result5, ' => ', result5 === false);
