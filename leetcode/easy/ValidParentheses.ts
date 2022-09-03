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
const isValid1 = isValid("()");
console.timeEnd('time1');
console.log('isValid = ', isValid1, ' => ', isValid1 === true);

console.time('time1');
const isValid2 = isValid("()[]{}");
console.timeEnd('time1');
console.log('isValid = ', isValid2, ' => ', isValid2 === true);

console.time('time1');
const isValid3 = isValid("(]");
console.timeEnd('time1');
console.log('isValid = ', isValid3, ' => ', isValid3 === false);

console.time('time1');
const isValid4 = isValid("((");
console.timeEnd('time1');
console.log('isValid = ', isValid4, ' => ', isValid4 === false);

console.time('time1');
const isValid5 = isValid("(){}}{");
console.timeEnd('time1');
console.log('isValid = ', isValid5, ' => ', isValid5 === false);

export default { isValidParentheses: isValid }